import React, {Component} from 'react';
import Board from 'react-trello'
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Segment, Button, Card, Image, Tab, Modal, Header, TextArea,  InputFormat, Form } from 'semantic-ui-react';


import axios from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';


import Project from '../ethereum/project';
import web3 from '../ethereum/web3';

import FileUpload from './FileUpload';
import ContributeForm from './ContributeForm';
import Layout from './Layout';
import DetailPageModal from './DetailPageModal'
import {SessionRole, UserId }from './SessionMockup'

const CONFIG = {
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true,
  credentials: 'same-origin',
};

class TotoBoard extends Component {


  constructor(props) {
		super(props);
		this.state = {
				backlogTickets: null,
        openDetail: false,
        openStaking: false,
        eventBus: null,
        selectedCard: null,
        isSelectedCardStaked: false
		};

	}


  setEventBus = (handle) => {

      this.setState({eventBus: handle});
  }

  showDetail = dimmer => () => this.setState({ dimmer, openDetail: true })

  closeDetail = () => this.setState({ openDetail: false })

  updateCard = (targetLaneId, cardId, updatedCard) => {

    this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId});
    this.state.eventBus.publish({type: 'ADD_CARD', laneId: targetLaneId, card: updatedCard});

  }
  undo = (cardId, sourceLaneId, targetLaneId) => this.state.eventBus.publish({type: 'MOVE_CARD', fromLaneId: targetLaneId, toLaneId: sourceLaneId, cardId: cardId, index: 0})
  showStaking = size => () => this.setState({ size, openStaking: true });
  closeStaking = () => this.setState({ openStaking: false });

  onAssign = (card) => {



          axios.post(`https://snowball-api-backend.herokuapp.com/cards/${card.id}/assign`, {
            userId: UserId,
            staking: 10
          });
          card['assigneeId'] = UserId;
          console.log(card.id);
          this.updateCard('IN_PROGRESS', card.id, card);
  }



  onDragEnd = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {

    this.setState({selectedCard: cardDetails});

    const cid = cardDetails.id;

    console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

    if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && SessionRole == 'admin') {

      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/reset`, {
        userId: UserId,
        point: 10
      });

    } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

      this.setState({openStaking: true });

    } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {
      console.log('good job!');

      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/submit`, {
        userId: UserId
      });

    } else if (sourceLaneId == targetLaneId) {

    } else {

      this.undo(cardId, sourceLaneId, targetLaneId);

    }



  }


  render() {

    const { openDetail, dimmer } = this.state
    const { openStaking, size } = this.state



    return (
      <Layout>
        <h1>{SessionRole} - {UserId}</h1>
        <Board draggable
              eventBusHandle={this.setEventBus}
              laneDraggable={false}
              onCardClick={this.showDetail('inverted')}
              handleDragEnd={this.onDragEnd}
              data={this.props.boardData} />


        <DetailPageModal openDetail={this.state.openDetail} closeDetail={this.closeDetail}/>


        <Modal size='mini' open={openStaking} onClose={this.closeStaking}>
          <Modal.Header>Stake your tokens! </Modal.Header>
          <Modal.Content>
            <ContributeForm
                address='0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1'
                selectedCard={this.state.selectedCard}
                onClose={this.closeStaking}
                onStaking={isSelectedCardStaked => this.setState({isSelectedCardStaked})}
                onAssign={this.onAssign}

            />
          </Modal.Content>
        </Modal>
      </Layout>
    );

  }

}

export default TotoBoard;

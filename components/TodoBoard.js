import React, {Component} from 'react';
import Board from 'react-trello'
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Dimmer, Loader, Segment, Button, Card, Image, Tab, Modal, Header, TextArea,  InputFormat, Form } from 'semantic-ui-react';

import Countdown from 'react-countdown-now';
import axios from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';


import Project from '../ethereum/project';
import web3 from '../ethereum/web3';

import FileUpload from './FileUpload';
import ContributeForm from './ContributeForm';
import Layout from './Layout';
import DetailPageModal from './DetailPageModal'
import {SessionRole, UserId }from './SessionMockup'
import Timer from './Timer';
import CountTimer from './CountTimer'

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
        openDetail: '',
        openStaking: false,
        eventBus: null,
        selectedCard: '',
        isSelectedCardStaked: false,
        boardData: this.props.boardData,
        count: 10,
        remainingMinutes: 0,
        remainingSeconds: 0,
        isLoading: false

		};

    console.log(this.state.boardData);



	}

  componentWillMount() {
    {/*this.state.boardData.lanes.map(lane => {

      if (lane.id == 'IN_REVIEW') {

        if (lane.cards.length > 0) {
          this.setState({isLoading: true});
        }
      }

      this.setState({'openDetail': 'IN_REVIEW'});
    })*/}
  }

  setEventBus = (handle) => {

      this.setState({eventBus: handle});
  }

  showDetail = dimmer => (cardId, metadata, laneId) => {

    console.log(metadata);
    metadata['laneId'] = laneId;
    metadata['cardId'] = cardId;
    this.setState({selectedCard: metadata});
    this.setState({ dimmer, openDetail: laneId });

  }

  closeDetail = () => this.setState({ openDetail: false })

  updateCard = (targetLaneId, cardId, updatedCard) => {

    this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId});
    this.state.eventBus.publish({type: 'ADD_CARD', laneId: targetLaneId, card: updatedCard});

  }
  undo = (cardId, sourceLaneId, targetLaneId) => this.state.eventBus.publish({type: 'MOVE_CARD', fromLaneId: targetLaneId, toLaneId: sourceLaneId, cardId: cardId, index: 0})
  showStaking = size => () => this.setState({ size, openStaking: true });
  closeStaking = () => this.setState({ openStaking: false });


  countDown = () => {

    let count = this.state.count;
    count -= 1;

    this.setState({count});
  }

  onCardAddHandler = (card, laneId) => {

    const self = this;

    console.log(card);

    const updatedCard = card;

    updatedCard['metadata'] = {'title': card['title'], 'description': card['description'], 'comments': []};
    updatedCard['laneId'] = laneId;
    updatedCard['state'] = laneId;
    updatedCard['label'] = '1';
    updatedCard['point'] = 1;
    updatedCard['comments'] = [];

    this.setState({isLoading: true});

    this.updateCard('BACKLOG', card.id, updatedCard);

    axios.post(`https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/card`, {
      userId: UserId,
      title: card['title'],
      description: card['description']
    }).then(function (response) {

      if (response.status == 200) {

          self.setState({isLoading: false});
      }

    })

  }

  onAssign = (card) => {

    const self = this;

    this.setState({isLoading: true});

    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${card.id}/assign`, {
      userId: UserId,
      staking: 10
    }).then(function (response) {

      if (response.status == 200) {
        card['assigneeId'] = UserId;

        self.updateCard('IN_PROGRESS', card.id, card);
      }

    }).catch(function (error) {

      console.log(error);

    }).then(function () {
      self.setState({isLoading: false});
  });

  }

  onDragEnd = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    const self = this;
    this.setState({selectedCard: cardDetails});

    const cid = cardDetails.id;

    console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

    if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && SessionRole == 'admin') {


      if (cardDetails.title == '' | cardDetails.description == '' | cardDetails.label == '') {

        alert('모든 내용을 채워야 합니다.');
        this.undo(cardId, sourceLaneId, targetLaneId);

      }

      this.setState({isLoading: true});
      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/reset`, {
        userId: UserId,
        point: parseInt(cardDetails.label)
      }).then(function (response) {

        if (response.status == 200) {

            self.setState({isLoading: false});
        }

      })

    } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

      this.setState({openStaking: true });

    } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {

      this.setState({isLoading: true});
      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/submit`, {
        userId: UserId
      }).then(function (response) {

        if (response.status == 200) {

            self.setState({isLoading: false});
        }

      })

    } else if (sourceLaneId == targetLaneId) {

    } else {

      this.undo(cardId, sourceLaneId, targetLaneId);
    }

  }

  onUpdatedCard = (updatedCard) => {
    console.log('aws');
    console.log(updatedCard)
    this.setState({selectedCard: updatedCard});
    this.updateCard(updatedCard['laneId'], updatedCard['cardId'], updatedCard);

  }

  Completionist = () => <span>You are good to go!</span>;

  renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
      return <this.Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  onCompletion = (card) => {
    if (card) {
      this.state.eventBus.publish({type: 'MOVE_CARD', fromLaneId: 'IN_PROGRESS', toLaneId: 'NOT_STARTED', cardId: card.id, index: 0});
    }

  }

  onVotingList = () => {

    this.state.boardData.lanes.map(lane => {

      if (lane.id == 'IN_REVIEW') {

        if (lane.cards.length > 0) {
          this.setState({isLoading: true});
        }
      }

    })

  }

  render() {

    let countCards;

    this.state.boardData.lanes.map(lane => {

      if (lane.id == 'IN_PROGRESS') {

        countCards = lane.cards.map(card => {

          return <CountTimer seconds={card.ttl} onCompletion={this.onCompletion} selectedCard={card}/>;

        })

      }

    })



    const { openDetail, dimmer } = this.state
    const { openStaking, size } = this.state


    return (
      <Layout>

        {countCards}

        <Dimmer active={this.state.isLoading} inverted>
          <Loader inverted content='Loading' />
        </Dimmer>

        <h1>{SessionRole} - {UserId}</h1>

        <Board draggable
              editable
              onCardAdd={this.onCardAddHandler}
              eventBusHandle={this.setEventBus}
              laneDraggable={false}
              style={{backgroundColor: 'lightgray'}}
              onCardClick={this.showDetail('inverted')}
              handleDragEnd={this.onDragEnd}
              data={this.state.boardData} />

        <DetailPageModal
            openDetail={this.state.openDetail}
            closeDetail={this.closeDetail}
            selectedCard={this.state.selectedCard}
            onUpdatedCard={this.onUpdatedCard}
            />


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

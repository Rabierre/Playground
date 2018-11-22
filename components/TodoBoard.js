import React, {Component} from 'react';
import Board from 'react-trello'
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Dimmer, Loader, Segment, Button, Card, Image, Tab, Modal, Header, TextArea,  InputFormat, Form, Dropdown} from 'semantic-ui-react';

import Countdown from 'react-countdown-now';
import axios from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';


import Project from '../ethereum/project';
import web3 from '../ethereum/web3';

import FileUpload from './FileUpload';
import ContributeForm from './ContributeForm';
import Layout from './Layout';
import DetailPageModal from './DetailPageModal';

import Timer from './Timer';
import CountTimer from './CountTimer'
import VotingListModal from './VotingListModal';
import ls from 'local-storage'

class TotoBoard extends Component {


  constructor(props) {

		super(props);
		this.state = {
				backlogTickets: null,
        openDetail: '',
        openStaking: false,
        openVoting: false,
        eventBus: null,
        selectedCard: '',
        isSelectedCardStaked: false,
        boardData: this.props.boardData,
        count: 10,
        remainingMinutes: 0,
        remainingSeconds: 0,
        isLoading: false,
        votingDone: true,
        votingList: null,
        countdown: null

		};

    console.log(this.state.boardData);



	}

  componentDidMount() {
    this.onCoundownHandler();

    const self = this;

    console.log('TodoBoard componentDidMount');
    console.log("Currently " + ls.get('User').id + " " + ls.get('User').role);

    axios.post(`https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/vote-list`, {
      userId: ls.get('User').id

    }).then(function (response) {

      if (response.data.length > 0) {

        console.log(response.data);
        self.setState({votingDone: false});
        self.setState({votingList: response.data});
        self.onVotingList();
        {/*self.setState({isLoading: true});*/}
      }
    });



  }

  componentDidUpdate() {

  }

  onUserSelectHandler = (event, data) => {

    console.log(data.value);
    ls.set('User', data.value);
    window.location.reload();

  }

  onVotingList = () => {

    let nVoteNeeded = 0;

    const votingCards = this.state.votingList

    votingCards.map(card => {

      if (!card.voted) {
        nVoteNeeded++;
      }

    });

    if (nVoteNeeded == 0) {


      this.setState({votingDone: true});

    } else {
      this.setState({openVoting: true});
    }
    console.log("nVoteNeeded: " + nVoteNeeded);

  }

  setEventBus = (handle) => {

      this.setState({eventBus: handle});
  }

  onDataChangeHandler = (newData) =>{

    console.log('data changed');
    console.log(newData);
    this.setState({boardData: newData})

  }

  showDetail = dimmer => (cardId, metadata, laneId) => {

    console.log(metadata);
    metadata['laneId'] = laneId;
    metadata['cardId'] = cardId;
    this.setState({selectedCard: metadata});
    this.setState({ dimmer, openDetail: laneId });

  }

  closeDetail = () => {
    const self = this;
    console.log('closedetail');
    console.log(this.state.selectedCard);


    if (this.state.selectedCard.laneId != ('IN_REVIEW' || 'IN_COMPLETE')) {

      this.setState({isLoading: true});

      const card = this.state.selectedCard;

      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${card.cardId}/update`, {
        userId: ls.get('User').id,
        title: card['title'],
        description: card['description']

      }).then(function (response) {

        console.log(response);

        if (response.status == 200) {

            self.updateCard(card.laneId, card.cardId, response.data);
            self.setState({isLoading: false});
            self.setState({ openDetail: false })

            {/*self.state.boardData.lanes[]*/}
            {/*this.sta response.data*/}
        }

      })

    } else {
      this.setState({ openDetail: false })
    }



  }

  updateCard = (targetLaneId, cardId, updatedCard) => {

    this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: targetLaneId, cardId: cardId});
    this.state.eventBus.publish({type: 'ADD_CARD', laneId: targetLaneId, card: updatedCard});

  }
  undo = (cardId, sourceLaneId, targetLaneId) => this.state.eventBus.publish({type: 'MOVE_CARD', fromLaneId: targetLaneId, toLaneId: sourceLaneId, cardId: cardId, index: 0})
  showStaking = size => () => this.setState({ size, openStaking: true });
  closeStaking = () => {

    this.setState({ openStaking: false });

  }


  countDown = () => {

    let count = this.state.count;
    count -= 1;

    this.setState({count});
  }

  onCardAddHandler = (card, laneId) => {

    const self = this;
    console.log('onCardAddHandler');
    console.log(card);
    console.log(card['label']);

    const updatedCard = card;

    updatedCard['metadata'] = {'title': card['title'], 'description': card['description'], 'comments': []};
    updatedCard['laneId'] = laneId;
    updatedCard['state'] = laneId;
    updatedCard['label'] = card['label'];
    updatedCard['point'] = parseInt(card['label']);
    updatedCard['comments'] = [];

    this.setState({isLoading: true});

    this.updateCard('BACKLOG', card.id, updatedCard);

    axios.post(`https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/card`, {
      userId: ls.get('User').id,
      title: card['title'],
      description: card['description']

    }).then(function (response) {

      if (response.status == 200) {

          self.setState({isLoading: false});
      }

    })

  }

  onCardDeleteHandler = (cardId, laneId) => {
    const self = this;

    this.setState({isLoading: true});
    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cardId}/archive`, {
      userId: ls.get('User').id,

    }).then(function (response) {

      if (response.status == 200) {

          self.setState({isLoading: false});
      }

    })

  }

  onAssign = (card, stake) => {

    const self = this;

    this.setState({isLoading: true});

    console.log(stake);

    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${card.id}/assign`, {
      userId: ls.get('User').id,
      staking: stake
    }).then(function (response) {

      if (response.status == 200) {
        card['assigneeId'] = ls.get('User').id;

        self.updateCard('IN_PROGRESS', card.id, card);
      }

    }).catch(function (error) {

      console.log(error);

    }).then(function () {
      self.onCoundownHandler();
      self.setState({isLoading: false});
  });

  }

  onDragEnd = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    const self = this;
    this.setState({selectedCard: cardDetails});

    const cid = cardDetails.id;

    console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);

    if (sourceLaneId == 'BACKLOG' && targetLaneId == 'NOT_STARTED' && (ls.get('User').role == 'TPM' | ls.get('User').role == 'su')) {


      if (cardDetails.title != '' && cardDetails.description != '') {

        this.setState({isLoading: true});
        axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/ready`, {
          userId: ls.get('User').id,
          point: 5
        }).then(function (response) {

          if (response.status == 200) {

              self.setState({isLoading: false});
          }

        })

      } else {
        alert('모든 내용을 채워야 합니다.');
        this.undo(cardId, sourceLaneId, targetLaneId);
      }



    } else if (sourceLaneId == 'NOT_STARTED' && targetLaneId == 'IN_PROGRESS') {

      this.setState({openStaking: true });

    } else if (sourceLaneId == 'IN_PROGRESS' && targetLaneId == 'IN_REVIEW' && cardDetails.assigneeId) {

      this.setState({isLoading: true});
      axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cid}/submit`, {
        userId: ls.get('User').id
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

  onCloseVotingList = () => {

    const self = this;

    axios.post(`https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/vote-list`, {
      userId: ls.get('User').id

    }).then(function (response) {

      if (response.data.length == 0) {
        self.setState({openVoting: false});
      } else {
        alert('Please finish voting!');
      }
    });


  }

  onCoundownHandler = () => {

    const self = this;

    this.setState({isLoading: true});

    axios.get('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/cards-by-state?state=IN_PROGRESS')
         .then(function(response){


           if (response.status == 200) {

             console.log(response.data);

             const countCards = response.data.map(card => {

               return <CountTimer seconds={card.ttl} onCompletion={self.onCompletion} selectedCard={card}/>;

             })

             self.setState({countdown: countCards});
             self.setState({isLoading: false});
          }

        });

  }


  render() {




    const { openDetail, dimmer } = this.state
    const { openStaking, size } = this.state

    const userList = [
          {key:'member', value: {id: 'user0000', role: 'member'}, text:'member'},
          {key:'TPM', value: {id: 'user1111', role: 'TPM'}, text:'TPM'},
          {key:'SU', value: {id: 'user2222', role: 'su'}, text:'su'}
    ]



    return (
      <Layout>

        <Dropdown placeholder={ls.get('User').role} search selection options={userList} onChange={this.onUserSelectHandler} />
        <VotingListModal
            votingDone={this.state.votingDone}
            openVoting={this.state.openVoting}
            votingList={this.state.votingList}
            onCloseVotingList={this.onCloseVotingList}
            />
        <div>
        {this.state.countdown}
        </div>
        {this.onVotingList}


                {/*<Dimmer active={this.state.isLoading} inverted>
                  <Loader inverted content='Loading' />
                </Dimmer>*/}

        <h1>{ls.get('User').id} [{ls.get('User').role}]</h1>


        <Board draggable
              editable
              onCardAdd={this.onCardAddHandler}
              eventBusHandle={this.setEventBus}
              laneDraggable={false}
              style={{backgroundColor: 'lightgray'}}
              onCardClick={this.showDetail('inverted')}
              onCardDelete={this.onCardDeleteHandler}

              handleDragEnd={this.onDragEnd}
              data={this.state.boardData} />

        <DetailPageModal
            onSelectedCardChange={updatedCard => {this.setState({selectedCard: updatedCard})}}
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
                onSelectedCardChange={updatedCard => {this.setState({selectedCard: updatedCard})}}
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

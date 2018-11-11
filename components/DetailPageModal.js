import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import axios, { post }  from 'axios';
import {SessionRole, UserId }from './SessionMockup'
import BacklogDetailModal from './lanes/BacklogDetailModal'
import NotStartedDetailModal from './lanes/NotStartedDetailModal'
import InProgressDetailModal from './lanes/InProgressDetailModal'
import InReviewDetailModal from './lanes/InReviewDetailModal'

class DetailPageModal extends Component {

  constructor(props) {
    super(props);

    this.state = {

      comment: '',
      selectedCard: this.props.selectedCard

    };

  }

  giveVote = (cardId, userId, point) => {
    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cardId}/rate`, {
      userId: userId,
      point: point
    });
  }

  onUpVote = () => {
    alert('onUpVote');
    this.giveVote(this.props.selectedCard.cardId, 'user0001', 1);

  }
  onDownVote = () => {
    alert('onDownVote');
    this.giveVote(this.props.selectedCard.cardId, 'user0001', 0);
  }


  render() {


    return (
      <div>
      <BacklogDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          />
      <NotStartedDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          />
      <InProgressDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          />
      <InReviewDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          />



      </div>

    )
  }
};

export default DetailPageModal;

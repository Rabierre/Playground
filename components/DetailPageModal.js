import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import axios, { post }  from 'axios';
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
      userId: ls.get('User').id,
      point: point
    }).then(function (response) {

      if (response.status == 200) {

        console.log('goood');

      }
      console.log(response);
    });

  }

  onUpVote = () => {
    alert('onUpVote');
    this.giveVote(this.props.selectedCard.cardId, ls.get('User').id, 3);

  }
  onDownVote = () => {
    alert('onDownVote');
    this.giveVote(this.props.selectedCard.cardId, ls.get('User').id, -1);
  }

  onChangeTitleHandler = (event) => {
    console.log('onChangeTitleHandler')
    this.props.selectedCard.title = event.target.value

    this.props.onSelectedCardChange(this.props.selectedCard);
  }
  onChangeDescriptionHandler = (event) => {

    this.props.selectedCard.description = event.target.value
    this.props.onSelectedCardChange(this.props.selectedCard);

  }

  render() {


    return (
      <div>
      <BacklogDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}

          onChangeTitleHandler={this.onChangeTitleHandler}
          onChangeDescriptionHandler={this.onChangeDescriptionHandler}
          />
      <NotStartedDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          onChangeTitleHandler={this.onChangeTitleHandler}
          onChangeDescriptionHandler={this.onChangeDescriptionHandler}
          />
      <InProgressDetailModal
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          onChangeTitleHandler={this.onChangeTitleHandler}
          onChangeDescriptionHandler={this.onChangeDescriptionHandler}
          />
      <InReviewDetailModal
          onUpVote={this.onUpVote}
          onDownVote={this.onDownVote}
          openDetail={this.props.openDetail}
          closeDetail={this.props.closeDetail}
          selectedCard={this.props.selectedCard}
          onUpdatedCard={this.props.onUpdatedCard}
          onChangeTitleHandler={this.onChangeTitleHandler}
          onChangeDescriptionHandler={this.onChangeDescriptionHandler}
          />



      </div>

    )
  }
};

export default DetailPageModal;

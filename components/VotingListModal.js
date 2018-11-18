import React, {Component} from 'react';
import { Button, Header, Image, Modal, List, Rating} from 'semantic-ui-react'
import ls from 'local-storage'
import axios, { post }  from 'axios';


class VotingListModal extends Component {

  constructor(props) {
    super(props);
    this.state = { votingWindowOpen: this.props.openVoting }
  }

  onRateHandler = (e, { rating, maxRating, card}) => {



    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${card.id}/rate`, {
      userId: ls.get('User').id,
      point: rating
    }).then(function (response) {

      if (response.status == 200) {

        console.log('voting successful');

      }

    });

  }




  render() {

    const { open } = this.state;

    let votingList;

    if (this.props.votingList) {

      votingList = this.props.votingList.map(card => {
        return (

          <List.Item>

            <List.Content>
              <List.Header>{card.title}</List.Header>
              <Rating maxRating={5}
                  onRate={this.onRateHandler}
                  card={card}
                   />
            </List.Content>
          </List.Item>

        )
      })

    } else {
      votingList = <List.Item></List.Item>

    }

    return (

      <Modal open={this.props.openVoting} onClose={this.props.onCloseVotingList}>

        <Modal.Header>Voting list</Modal.Header>
        <Modal.Content>
          <Modal.Description>

            <List celled>

              {votingList}
            </List>


          </Modal.Description>
        </Modal.Content>
      </Modal>
    )}
}

export default VotingListModal;

import React, {Component} from 'react';
import {Container, Sticky, Button, Input, List, Image, Form} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';
import axios, { post }  from 'axios';
import {SessionRole, UserId }from './SessionMockup'

class CommentList extends Component {

  constructor(props) {
    super(props);

    this.state = {

      comment: ''
    };

  }

  onAddCommentHandler = () => {

    const self = this;
    const cardId = this.props.selectedCard.cardId;

    axios.post(`https://snowball-api-backend.herokuapp.com/cards/${cardId}/comment`, {
      userId: UserId,
      title: this.state.comment,
      content: this.state.comment
    }).then(function (response) {

      if (response.status == 200) {

          self.props.selectedCard.comments.push({title: self.state.comment});
          self.setState({comment: ''});
      }
    })

  }

  onChangeHandler = (event) => {

    this.setState({comment: event.target.value});
  }

  render() {

    let comments = this.props.selectedCard.comments;

    if (comments) {


      comments = comments.map(comment => {

        return (

          <List.Item>
            <Image avatar src='http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg' />
            <List.Content>
              <List.Header>{comment.title}</List.Header>

            </List.Content>
          </List.Item>

        );

      });

    } else {
      comments = [];
    }

    return (
      <div>
      <List celled>

        {comments}
      </List>
      <Form>
        <span>
        <Input fluid
            placeholder='Add a comment...'
            value={this.state.comment}
            onChange={this.onChangeHandler}
            />

        </span>
        <Button
            onClick={this.onAddCommentHandler}
        >Done</Button>
      </Form>
      </div>

    )
  }

};

export default CommentList;

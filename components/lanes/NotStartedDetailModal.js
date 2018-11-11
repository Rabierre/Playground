import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import {SessionRole, UserId }from '../SessionMockup'
import CommentList from '../CommentList'
import Submissions from '../Submissions'
import SubmissionForm from '../SubmissionForm'

class NotStartedDetailModal extends Component {

  constructor(props) {
    super(props);

    this.state = {

      comment: '',
      selectedCard: this.props.selectedCard

    };

  }

  render() {

    return (
        <div>
          <Modal open={this.props.openDetail == 'NOT_STARTED'} onClose={this.props.closeDetail}>
          <Form>
            <Form.Field style={{fontSize: '20px', fontWeight: 'bold'}} control={TextArea} value={this.props.selectedCard.title} />
            <Form.Field control={TextArea} placeholder='Add a more detailed description...' value={this.props.selectedCard.description} />
          </Form>

          <Modal.Content>
            <Modal.Description>

              <CommentList selectedCard={this.props.selectedCard}/>

            </Modal.Description>
          </Modal.Content>
          </Modal>
        </div>


    )
  }


}


export default NotStartedDetailModal;

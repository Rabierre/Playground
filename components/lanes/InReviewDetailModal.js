import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import CommentList from '../CommentList'
import Submissions from '../Submissions'
import SubmissionForm from '../SubmissionForm'

class InReviewDetailModal extends Component {

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
          <Modal open={this.props.openDetail == 'IN_REVIEW'} onClose={this.props.closeDetail}>
          <Form>
            <Button.Group size='large' fluid>
              <Button onClick={this.props.onUpVote}>Up vote</Button>
              <Button.Or />
              <Button onClick={this.props.onDownVote}>Down vote</Button>
            </Button.Group>
            <Form.Field onChange={this.props.onChangeTitleHandler} style={{fontSize: '20px', fontWeight: 'bold'}} control={TextArea} value={this.props.selectedCard.title} />
            <Form.Field onChange={this.props.onChangeDescriptionHandler} control={TextArea} placeholder='Add a more detailed description...' value={this.props.selectedCard.description} />
          </Form>

          <Modal.Content>
            <Modal.Description>
              <h1>{JSON.stringify(this.props.selectedCard.submission)}</h1>
              <Submissions selectedCard={this.props.selectedCard}/>
              <CommentList selectedCard={this.props.selectedCard}/>

            </Modal.Description>
          </Modal.Content>
          </Modal>
        </div>



    )
  }


}


export default InReviewDetailModal;

import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import CommentList from '../CommentList'
import Submissions from '../Submissions'
import SubmissionForm from '../SubmissionForm'

class BacklogDetailModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  componentWillMount(){

    this.setState({title: this.props.selectedCard.title});

  }
  componentDidMount(){

    this.setState({title: this.props.selectedCard.title});

  }



  render() {
    return (
        <div>
          <Modal open={this.props.openDetail == 'BACKLOG'} onClose={this.props.closeDetail}>
          <Form>
            <Form.Field onChange={this.props.onChangeTitleHandler} style={{fontSize: '20px', fontWeight: 'bold'}} control={TextArea} value={this.props.selectedCard.title} />
            <Form.Field onChange={this.props.onChangeDescriptionHandler} control={TextArea} placeholder='Add a more detailed description...' value={this.props.selectedCard.description} />
          </Form>
          <Modal.Content>
            <Modal.Description>
              <Submissions selectedCard={this.props.selectedCard}/>
              <CommentList selectedCard={this.props.selectedCard}/>
            </Modal.Description>
          </Modal.Content>
          </Modal>
        </div>
    )
  }
}


export default BacklogDetailModal;

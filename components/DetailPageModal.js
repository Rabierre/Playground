import React, {Component} from 'react';
import { Button, Header, Icon, Input, List, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import axios, { post }  from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import FileUpload from './FileUpload';


class DetailPageModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Modal open={this.props.openDetail} onClose={this.props.closeDetail}>
        <Form>
          <Form.Field style={{fontSize: '20px', fontWeight: 'bold'}} control={TextArea} value={this.props.selectedCard.title} />
        </Form>
        <Modal.Content>
          <Modal.Description>
            <Form>
             <Form.Field control={TextArea} placeholder='Add a more detailed description...' value={this.props.selectedCard.title} />
              <Button> Show Notebook </Button>
              <iframe style={{width: '100%'}} src='https://s3-us-west-1.amazonaws.com/kaj011/prediction.html'  scrolling="yes"></iframe>
                <FileUpload />



            </Form>
            <List celled>
              <List.Item>
                <Image avatar src='http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg' />
                <List.Content>
                  <List.Header>Snickerdoodle</List.Header>
                  An excellent companion
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src='/images/avatar/small/daniel.jpg' />
                <List.Content>
                  <List.Header>Poodle</List.Header>
                  A poodle, its pretty basic
                </List.Content>
              </List.Item>
              <List.Item>
                <Image avatar src='/images/avatar/small/daniel.jpg' />
                <List.Content>
                  <List.Header>Paulo</List.Header>
                  Hes also a dog
                </List.Content>
              </List.Item>
            </List>
            <Form>
              <span>
              <Input fluid placeholder='Add a comment...' />
              <Button> test </Button>
              </span>
            </Form>




          </Modal.Description>
        </Modal.Content>

      </Modal>
    )
  }
};

export default DetailPageModal;

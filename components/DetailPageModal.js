import React, {Component} from 'react';
import { Button, Header, Icon, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
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

        {/*<div dangerouslySetInnerHTML={{__html: this.state.notebook}} />*/}
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content>
          {/*<Image wrapped size='medium' src='/images/wireframe/image.png' />*/}
          <Modal.Description>
            <Form>
              <Header>Description</Header>
                <Form.Field control={TextArea} placeholder='Add a more detailed description...' />
              <Header>Jupyter Notebook</Header>
              <Button> Show Notebook </Button>
              <iframe style={{width: '100%'}} src='https://s3-us-west-1.amazonaws.com/kaj011/prediction.html'  scrolling="yes"></iframe>
                <FileUpload />

              <Header>Add Comment</Header>
                <Form.Field control={TextArea} placeholder='Write a comment...' />
            </Form>

          </Modal.Description>
        </Modal.Content>

      </Modal>
    )
  }
};

export default DetailPageModal;

import React, {Component} from 'react';
import {Container, Sticky, Button, Input, List, Image, Form} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';
import axios, { post }  from 'axios';
import {SessionRole, UserId }from './SessionMockup'
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import Dropzone from 'react-dropzone';
import FileUpload from './FileUpload';

class SubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <Form>

        <Button> Show Notebook </Button>

        <iframe style={{width: '100%'}} src='https://s3-us-west-1.amazonaws.com/kaj011/prediction.html'  scrolling="yes"></iframe>
          <FileUpload />

      </Form>

    )

  }

};

export default SubmissionForm;

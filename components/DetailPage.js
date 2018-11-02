import React, {Component} from 'react';
import { Button, Header, Icon, Image, Modal, TextArea, InputFormat, Form } from 'semantic-ui-react'
import Dropzone from 'react-dropzone';
import axios, { post }  from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import FileUpload from './FileUpload';


class DetailPage extends Component {

  constructor(props) {
    super(props);

  }

  state = {
    s3Url: 'https://kaj011.amazonaws.com',
    uploadOptions: {
      server: 'http://localhost:3000'
      // ,
      // signingUrlQueryParams: {uploadType: 'avatar'}
    }
  };

  handleFinishedUpload = info => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);
  
  };

  // const s3Url = 'https://kaj011.s3.amazonaws.com'

  // onDrop = (acceptedFiles, rejectedFiles) => {
  //   console.log('onDrop');
  //   console.log(acceptedFiles[0]);
  //
  //   const file = acceptedFiles[0];
  //
  //   // this.fileUpload(acceptedFiles)
  //   // .then((response) => {
  //   //   console.log(response.data);
  //   // });
  //
  //   this.fileUpload(file, endpoint)
  //   .then((response) => {
  //     console.log(response.data);
  //   });


    //
    // acceptedFiles.map(file => {
    //   axios({
    //      url: endpoint,
    //      method: 'post',
    //      data: {
    //        file,
    //        name: 'test',
    //      },
    //    })
    //     .then(response => {
    //       console.log(response.data)
    //     })
    //     .catch((error) => {
    //       console.log(error.response.data);
    //     });
    //   });
    // // });

  // }
  // fileUpload(file, endpoint){
  //   const url = endpoint;
  //   const formData = new FormData();
  //   formData.append('file',file)
  //   const config = {
  //       headers: {
  //           // "X-Requested-With": "XMLHttpRequest",
  //           'Access-Control-Allow-Origin': '*'
  //       }
  //   }
  //   return post(url, formData,config)
  // }


show = dimmer => () => this.setState({ dimmer, open: true })
  render() {
    return (
      <Modal dimmer={dimmer} open={open} onClose={this.close}>
        <div>hi</div>
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


                {/*<Dropzone onDrop={(files) => this.onDrop(files)}>
                  <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>*/}
                {/*<DropzoneS3Uploader
                  onFinish={this.handleFinishedUpload}
                  s3Url={this.state.s3Url}
                  maxSize={1024 * 1024 * 5}
                  upload={this.state.uploadOptions}
                />*/}
              <Header>Add Comment</Header>
                <Form.Field control={TextArea} placeholder='Write a comment...' />
            </Form>

          </Modal.Description>
        </Modal.Content>
        {/*<Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>*/}
      </Modal>
    )
  }
};

export default DetailPage;

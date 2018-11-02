import React, {Component} from 'react';
import Board from 'react-trello'
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Segment, Button, Card, Image, Tab, Modal, Header, TextArea,  InputFormat, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';
import TicketList from '../components/TicketList';
import axios from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import FileUpload from '../components/FileUpload';

import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import ContributeForm from '../components/ContributeForm';


class ToBoBoard extends Component {
  constructor(props) {
		super(props);
		this.state = {
				backlogTickets: null,
        openDetail: false,
        openStaking: false
		};

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {


      // const posts = response.data.map(post => {
      //   // console.log(post);
      //   return <div> {post.title} </div>;
      // })

      this.setState({backlogTickets: response.data});
    })




	}

  showDetail = dimmer => () => this.setState({ dimmer, openDetail: true })
  showStaking = size => () => {
    this.setState({ size, openStaking: true });
  }
  closeDetail = () => this.setState({ openDetail: false })
  closeStaking = () => this.setState({ openStaking: false })

  closeDetail = () => this.setState({ openDetail: false })
  closeStaking = () => this.setState({ openStaking: false })

  registerStaking = (cardId, sourceLaneId, targetLaneId, position, cardDetails) => {
    if (targetLaneId == 'inProgress') {

      this.setState({openStaking: true });
    }

    console.log(cardId, sourceLaneId, targetLaneId, position, cardDetails);
  }

  render() {
    const { openDetail, dimmer } = this.state
    const { openStaking, size } = this.state

    const data = {
      lanes: [
        {
          id: 'backlog',
          title: 'Backlog',
          label: '2/2',

          cardColor: '#E08521',
          cards: [
            {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', dueOn: 'due now',},
            {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
          ]
        },
        {
          id: 'getStarted',
          title: 'Get Started',
          label: '0/0',
          cards: []
        },
        {
          id: 'inProgress',
          title: 'In Progress',
          label: '0/0',
          cards: []
        },
        {
          id: 'inReview',
          title: 'In Review',
          label: '0/0',
          cards: []
        },
        {
          id: 'completed',
          title: 'Completed',
          label: '0/0',
          cards: []
        }

      ]
    }


    const panes = [
      { menuItem: 'To-to items', render: () => <Tab.Pane>
      <Board draggable
            laneDraggable={false}
            onCardClick={this.showDetail('inverted')}
            handleDragEnd={this.registerStaking}
            data={data} />

        </Tab.Pane> },
      { menuItem: 'Homework', render: () => <Tab.Pane>Homework</Tab.Pane> },
      { menuItem: 'Submissions', render: () => <Tab.Pane>Submission</Tab.Pane> },
    ]


    return (

      <Layout>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />

        <Modal dimmer={dimmer} open={openDetail} onClose={this.closeDetail}>

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

        </Modal>


        <Button onClick={this.showStaking('mini')}>Mini</Button>
        <Modal size='mini' open={openStaking} onClose={this.closeStaking}>
          <Modal.Header>Stake your tokens! </Modal.Header>
          <Modal.Content>
            <ContributeForm address='0x3aafeFFc0aC78dC62512780fd9f191d19f8196B1'/>
          </Modal.Content>
        </Modal>

      </Layout>
    )
  };

}

export default ToBoBoard;

import React, {Component} from 'react';
import Board from 'react-trello'
import {Container,Grid, Segment, Button, Card, Image, Tab, Modal, Header, TextArea,  InputFormat, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';
import axios from 'axios';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import FileUpload from '../components/FileUpload';
import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import ContributeForm from '../components/ContributeForm';
import TotoBoard from '../components/TodoBoard'


class ProjectBoard extends Component {


  static async getInitialProps() {

    this.state = {
        backlogTickets: null,
        openDetail: false,
        openStaking: false
    };

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      withCredentials: true,
      credentials: 'same-origin',
    };


    const rawData = await axios.get('https://snowball-api-backend.herokuapp.com/projects/project_XwPp9xaz/cards');

    let dic = {'BACKLOG':[], 'NOT_STARTED': [], 'IN_PROGRESS': [], 'IN_REVIEW': [], 'IN_COMPLETE':[]};

    rawData.data.map(card => dic[card.state].push(card));

    const data = {
      lanes: [
        {
          id: 'BACKLOG',
          title: 'BACKLOG',
          cards: dic['BACKLOG']
        },
        {
          id: 'NOT_STARTED',
          title: 'NOT_STARTED',
          cards: dic['NOT_STARTED']
        },
        {
          id: 'IN_PROGRESS',
          title: 'IN PROGRESS',
          cards: dic['IN_PROGRESS']
        },
        {
          id: 'IN_REVIEW',
          title: 'IN REVIEW',
          cards: dic['IN_REVIEW']
        },
        {
          id: 'IN_COMPLETE',
          title: 'IN COMPLETE',
          cards: dic['IN_COMPLETE']
        },
      ]
    }

    return {data};

  }

  render() {

    return (

      <Layout>
        <TotoBoard boardData={this.props.data}/>
      </Layout>
    )
  };

}

export default ProjectBoard;


import _ from 'lodash'
import React, {Component} from 'react';
import {Card, Container, List, Tab, Grid, Button, Image, Modal, Header, Rail, Segment, Sticky} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Project from '../../ethereum/project';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import {Link} from '../../routes';
// import factory from '../../ethereum/factory';
const Placeholder = () => <Image src='https://bair.berkeley.edu/images/berkeley_1.jpg' />

class ProjectShow extends Component {

  static async getInitialProps(props) {

    const address = props.query.address;
    const project = Project(address);
    const summary = await project.methods.getSummary().call();

    console.log(summary);

    return {
        address: address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]

    };


  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;

    const items = [

      {
          header: manager,
          meta: 'Address of Manager',
          description: 'The manager created this campaign',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: minimumContribution,
          meta: 'Minimum Contribution (wei)',
          description: 'You must pay for it!',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: requestsCount,
          meta: 'Minimum Contribution (wei)',
          description: 'Minimum Contribution (wei)',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: approversCount,
          meta: 'The counts of approvers',
          description: 'The counts of approvers',
          style: {overflowWrap: 'break-word'}
      },
      {
          header: web3.utils.fromWei(balance, 'ether'),
          meta: 'Campaign Balance (ether)',
          description: 'You must pay for it!',
          style: {overflowWrap: 'break-word'}
      }
    ];

    return <Card.Group items={items} />;

  }

  state = { open: false }



  handleContextRef = contextRef => this.setState({ contextRef })

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  render() {


    const { contextRef } = this.state
    const panes = [
      { menuItem: "Description", render: () => <Tab.Pane attached={false}>

      <h1> What you will learn </h1>

      <Grid columns='two' divided>
         <Grid.Row>
           <Grid.Column>
             Learn how Deep Learning REALLY works (not just some diagrams and magical black box code)
           </Grid.Column>
           <Grid.Column>
             Learn how a neural network is built from basic building blocks (the neuron)
           </Grid.Column>
         </Grid.Row>

         <Grid.Row>
           <Grid.Column>
             Code a neural network from scratch in Python and numpy
           </Grid.Column>
           <Grid.Column>
           Code a neural network using Google  TensorFlow

           </Grid.Column>
        </Grid.Row>
        <Grid.Row>
           <Grid.Column>
             Describe different types of neural networks and the different types of problems they are used for
           </Grid.Column>
           <Grid.Column>
             Describe different types of neural networks and the different types of problems they are used for
           </Grid.Column>
        </Grid.Row>


      </Grid>
      <h1> Requirements </h1>
      <List as='ul'>
        <List.Item as='li'>
      How to take partial derivatives and log-likelihoods (ex. finding the maximum likelihood estimations for a die)
        </List.Item>
        <List.Item as='li'>
      Install Numpy and Python (approx. latest version of Numpy as of Jan 2016)
      </List.Item>
      <List.Item as='li'>
      Dont worry about installing TensorFlow, we will do that in the lectures.
      </List.Item>
      <List.Item as='li'>
      Being familiar with the content of my logistic regression course (cross-entropy cost, gradient descent, neurons, XOR, donut) will give you the proper context for this course
      </List.Item>
      </List>


      <h1> Who is the target audience? </h1>
Students interested in machine learning - you will get all the tidbits you need to do well in a neural networks course
Professionals who want to use neural networks in their machine learning and data science pipeline. Be able to apply more powerful models, and know its drawbacks.
People who already know how to take partial derivatives and log-likelihoods. Since we cover this in more detail in my logistic regression class, it is not covered quite as thoroughly here.
People who already know how to code in Python and Numpy. You will need some familiarity because we go through it quite fast. Don't worry, it's not that hard.


      </Tab.Pane> },

      { menuItem: 'Curriculum', render: () => <Tab.Pane attached={false}>

      Curriculum

      </Tab.Pane> },

      { menuItem: 'Enrollment', render: () => <Tab.Pane attached={false}>
        <Grid>
          <Grid.Column width={10}>
            {this.renderCards()}
            <Link route={`/projects/${this.props.address}/requests`}>
                <a>
                  <Button primary> View Requests </Button>
                </a>
            </Link>
          </Grid.Column>
          <Grid.Column width={6}>
            <ContributeForm address={this.props.address}/>

          </Grid.Column>
        </Grid>

      </Tab.Pane> },

      { menuItem: 'Application', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    ]

    return (
      <Layout>
      <div>
        <Container text>
          <Header as='h1'>Data Science: Deep Learning in Python</Header>
          <p>
            The MOST in-depth look at neural network theory, and how to code one with pure Python and Tensorflow
          </p>
          <p>
          Created by Lazy Programmer Inc. Last updated 10/2018
          </p>
        </Container>
      </div>
      <div style={{marginTop:'50px'}}>

        <Container text>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Container>
      </div>
      </Layout>
    );
  }


}

export default ProjectShow;

import React, {Component} from 'react';
// import {Card, Grid, Button} from 'semantic-ui-react';
import {Container,Grid, Segment, Button, Card, Image } from 'semantic-ui-react';
import Layout from './Layout';
import DetailPage from './DetailPage';

export default (props) => {

  return (

    <Card>
      <Card.Content>

        <Card.Header>{props.data.title}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          {props.data.body}
        </Card.Description>
        <DetailPage />
      </Card.Content>

      {/*<Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>*/}
    </Card>

  );

};

import React, {Component} from 'react';
// import {Card, Grid, Button} from 'semantic-ui-react';
import {List, Container,Grid, Button, Card } from 'semantic-ui-react';
import Layout from './Layout';
import Ticket from './Ticket';

class TicketList extends Component {

  constructor(props) {
    super(props);

  }

  retrieveTicket = () => {
    const tickets = this.props.tickets;
    if (tickets) {
      console.log(tickets);
      return tickets.map(ticket => {

        return <Ticket key={ticket.id} data={ticket} />;

      });

    }





  };

  render() {
    return (

      <Card>
        <Card.Content>
          <Card.Header>{this.props.listName}</Card.Header>
        </Card.Content>
        <Card.Content>

            {this.retrieveTicket()}

        </Card.Content>
      </Card>

    );
  };

};
export default TicketList;

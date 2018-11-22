import React, {Component} from 'react';
import {Container, Sticky, Button, Input, List, Image, Form} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';
import axios, { post }  from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class SubmissionList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      copied: false
    };



  }

  onLinkHandler = (url) => {

    alert(url);
  }


  render() {

    let submissions = this.props.selectedCard.submissions;

    if (submissions) {


      submissions = submissions.map(submission => {

        return (

          <List.Item>

            <List.Content>
              <button onClick={() => { window.open(submission.url)}}>Show Notebook</button>
              <CopyToClipboard text={submission.id}
                onCopy={() => this.setState({copied: true})}>

                <a> {submission.id}</a>

              </CopyToClipboard>


            </List.Content>
          </List.Item>

        );

      });

    } else {
      submissions = [];
    }

    return (
      <div>
        {submissions}
      </div>
    )

  }
};


export default SubmissionList;

import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {

  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {

    event.preventDefault();
    const project = Project(this.props.address);

    this.setState({loading: true});


    try {
      const accounts = await web3.eth.getAccounts();
      await project.methods.contribute().send({

        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')

      })
      Router.replaceRoute(`/projects/${this.props.address}`);
    } catch (e) {

      this.setState({errorMessage: err.message});

    }

    this.setState({loading: false, value:''});


  }

  render() {

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label> Amount to stake </label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
            label='ether'
            labelPosition='right'
          />
        </Form.Field>
        <Button primary loading={this.state.loading}>
          Put my stake!
        </Button>
      </Form>

    )

  }

}


export default ContributeForm;

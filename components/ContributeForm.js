import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component {

  state = {

    errorMessage: '',
    loading: false
  };

  onSelectedCardChange = (event) => {


    this.props.selectedCard.point = event.target.value;
    this.props.onSelectedCardChange(this.props.selectedCard);
  }

  onSubmit = async event => {

    event.preventDefault();
    const project = Project(this.props.address);

    this.setState({loading: true});


    {/*try {
      const accounts = await web3.eth.getAccounts();
      await project.methods.contribute().send({

        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')

      })
      Router.replaceRoute(`/projects/${this.props.address}`);
    } catch (e) {

      this.setState({errorMessage: err.message});

    }
*/}


    this.props.onStaking(true);

    console.log(this.props.selectedCard.point);
    this.props.onAssign(this.props.selectedCard, this.props.selectedCard.point);
    this.setState({loading: false, value:''});
    this.props.onClose();
    // this.props.selectedCard['test'] = 1;



  }

  render() {

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label> Amount to stake </label>

          <Input
            value={this.props.selectedCard.point}
            onChange={this.onSelectedCardChange}
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

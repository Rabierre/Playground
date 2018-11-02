
import React, {Component} from 'react';
import {Card, Grid, Button, Image, Icon} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import {Link} from '../routes';

class ProjectIndex extends Component {

  static async getInitialProps() {

    const projects = await factory.methods.getDeployedProjects().call();

    return {projects};

  }

  renderProjects() {

    const items = this.props.projects.map(address => {

      return (
        
        <Card
        image='https://bair.berkeley.edu/images/berkeley_1.jpg'
        header={
            <Link route={`/projects/${address}`}>

              <a>Get Started!</a>
            </Link>
        }
        meta='Friend'
        description={'Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'}
        />);



    });

    return items;

  }

  render() {

    return (
      <Layout>
        <div>

          <h3>Open Projects </h3>
          <div>
          <Link route='/projects/new'>
            <a>
              <Button
                floated='right'
                content='Create Project'
                icon='add'
                secondary
              />
            </a>
          </Link>
          </div>





          <Card.Group>
              {this.renderProjects()}

          </Card.Group>
        </div>
      </Layout>
    );
  }

}

export default ProjectIndex;

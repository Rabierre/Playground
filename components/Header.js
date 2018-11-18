
import React, {Component} from 'react';
import {Menu, Dropdown} from 'semantic-ui-react';
import {Link} from '../routes';
import ls from 'local-storage'

class Header extends Component {



  render() {




    return (

      <Menu fixed='top'>

        <Link route='/'>
          <a className='item'>
            <b>
            PlayGround.ds
            </b>
          </a>
        </Link>

        <Menu.Menu position='right'>

        <Dropdown text='My Projects' pointing className='link item'>
          <Dropdown.Menu>
            <Link route='/board'>
              <Dropdown.Item>DS Bootcamp - Theory</Dropdown.Item>
            </Link>
            <Link route='https://www.notion.so/almightydatasciencebootcamp/d3056b212814446ca2d293fe96a27c08?v=a927618e78e14aed8336d7e8f885b2b1'>
              <Dropdown.Item>

                  DS Bootcamp - Practice

              </Dropdown.Item>
            </Link>

          </Dropdown.Menu>
        </Dropdown>

          <Link route='/projects/new'>
            <a className='item'> My Wallet </a>
          </Link>
          {/*<Link route='/projects/new'>
            <a className='item'> + </a>
          </Link>*/}
        </Menu.Menu>
      </Menu>

    )
  }

}

export default Header;

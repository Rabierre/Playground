import React from 'react';
import {Container, Sticky} from 'semantic-ui-react';
import Header from './Header';
import Head from 'next/head';

export default props => {

  return (
    <div>
        <Sticky>
        <Header />
        </Sticky>
        <div style={{marginTop:'100px', marginLeft:'20px', marginRight:'20px'}}>
          <Head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
          </Head>

          {props.children}
        </div>

    </div>

  )

};

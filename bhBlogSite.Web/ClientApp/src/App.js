import React, { Component } from 'react';
import { Route } from 'react-router';
import  Layout  from './Layout';
import  Home  from './pages/Home';
import Admin  from './pages/Admin';
import ViewPost from './pages/viewPost';


import MostRecent from './pages/MostRecent';


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/viewpost/:id' component={ViewPost} />
        <Route exact path='/mostrecent' component={MostRecent}/>
      </Layout>
    );
  }
}

import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { CovenantList } from './components/CovenantList';
// import { FetchData } from './components/FetchData';
// import Counter from './components/Counter';

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
         <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/covenants/:id' component={CovenantList} />
         </Layout>
    );
  }
}

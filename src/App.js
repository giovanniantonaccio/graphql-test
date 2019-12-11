import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import { ApolloProvider } from '@apollo/react-hooks';

import client from './services/apollo';
import history from './services/history';

import Header from './components/Header';
import Routes from './routes';
import './styles/index.css';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <div className="center w85">
          <Header />
          <div className="ph3 pv1 background-gray">
            <Routes />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));

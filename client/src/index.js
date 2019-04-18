import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {Provider} from 'react-redux';
import client from './ApolloClient';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>, 
document.getElementById('root'));
registerServiceWorker();

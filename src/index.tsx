import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { v4 as uuid } from 'uuid';

import App from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: uuid(),
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          created_at: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

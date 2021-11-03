import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({
  models:{
    transactions:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1, 
          title: 'Website',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date()
        },
        {
          id:2, 
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1000,
          createdAt: `${new Date()}`
        }
      ]
    })
  },
  
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('transactions', (schema, request) => {
      const req = JSON.parse(request.requestBody)

      const data = {
        ...req,
        createdAt: new Date()
      }

      return schema.create('transactions', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

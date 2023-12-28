import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rota from './Routes';
import { QueryClientProvider, QueryClient } from 'react-query'
import Provaider from './Context';

const client = new QueryClient()//chamando uma class da biblioteca react-requery e passando como parametro para o componente queryProvaider

const root = ReactDOM.createRoot(
  document.getElementById('view') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provaider>
      <QueryClientProvider client={client}>
        <Rota />
      </QueryClientProvider>
    </Provaider>
  </React.StrictMode>
);

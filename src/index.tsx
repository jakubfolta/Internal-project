import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { IgdbContextProvider } from './store/IgdbContext';

ReactDOM.render(
  <IgdbContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </IgdbContextProvider>,
  document.getElementById('root')
);


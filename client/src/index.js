import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import UserAuth from './UserAuth';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{ 
    user: new UserAuth()
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScreenProvider from './context/screenSize/screenProvider'

ReactDOM.render(
  <ScreenProvider>
    <App />
  </ScreenProvider>
  ,
  document.getElementById('root')
);
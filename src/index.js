import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ruleReducer from './RuleSlice';
import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    rule: ruleReducer
  }
});

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

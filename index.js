import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './AppMain';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
const store = createStore(listReducer);
ReactDOM.render(<Provider store={store}> <AppMain /> </Provider>, document.querySelector('#root'));
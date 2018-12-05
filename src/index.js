import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";


const store = createStore(reducer);
ReactDOM.render(<Provider store = {store}></Provider>, document.getElementById('root'));
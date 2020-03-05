import 'react-app-polyfill/ie11';
import "react-app-polyfill/stable";
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from './actions/items'
import axios from 'axios';
import ReactDom from "react-dom"
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import ItemList from './components/ItemList';
import './style.css'; 

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';
const url = API + DEFAULT_QUERY;

const store = configureStore();


class App extends Component { 

    render() {
     
  return(
        <Provider store={store}>
            <div><h2>Telework Update</h2>

            <ItemList />  

        </div></Provider>
  )
    }
    
} 

ReactDom.render(<App/>, document.getElementById("root"))




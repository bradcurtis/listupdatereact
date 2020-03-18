import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "./actions/items";
import axios from "axios";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { EmployeeUpdatePage } from "./components/EmployeeUpdatePage";
import  ReportItemList  from "./components/ReportItemList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ItemList from "./components/ItemList";
import "./style.css";

const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";
const url = API + DEFAULT_QUERY;

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Router>
      <div>

        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item py-3 px-md-5">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item py-3 px-md-5">
              <Link to="/office">Update Office</Link>
            </li>            
          </ul>
        </nav>
        <div>
          <h2>Telework Update</h2>

          
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/office">
            <ReportItemList />
          </Route>          
          <Route path="/">
          <EmployeeUpdatePage></EmployeeUpdatePage>
          </Route>
        </Switch>
      </div>
    </Router>
      </Provider>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

ReactDom.render(<App />, document.getElementById("root"));

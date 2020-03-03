import 'react-app-polyfill/ie11';
import "react-app-polyfill/stable";
import axios from 'axios';
import React from "react"
import ReactDom from "react-dom"
import {ChangeColor} from "./ChangeColor"
import './style.css'; 

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';


class App extends React.Component { 

    constructor(props) 
    { 
        super(props); 
        this.state = {
            hits: [],
            isLoading: true,
        }
        
    }

    componentDidMount() {  
       
        axios.get(  API + DEFAULT_QUERY)
        .then(  (response) => {
            console.log(response);
            this.setState({ hits: response.data.hits, isLoading: false });
        })
        .catch (function(error){
            console.log(error);
        })

      /*  axios.get('http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster')
        .then(  (response) => {
            console.log(response);
            this.setState({ hits: response.data.d.results, isLoading: false });
        })
        .catch (function(error){
            console.log(error);
        })*/

        /*fetch(  API + DEFAULT_QUERY)
        .then(response => response.json())
        .then(data => this.setState({ hits: data.hits, isLoading: false }));

         */     
      }
    render() 
    { 
        const { hits, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading ...</p>
          }
        
        return (<div><h2>Welcome to</h2> 
        <ChangeColor title="Update List Items" persons={hits}/>

        

        </div>); 
    } 
} 


ReactDom.render(<App/>, document.getElementById("root"))
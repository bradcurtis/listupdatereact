import React from "react"
import ReactDom from "react-dom"
import {ChangeColor} from "./ChangeColor"
import './style.css'; 


class App extends React.Component { 
    render() 
    { 
        return (<div><h2>Welcome to</h2> 
        <ChangeColor title="GeeksforGeeks" />
        </div>); 
    } 
} 


ReactDom.render(<App/>, document.getElementById("root"))
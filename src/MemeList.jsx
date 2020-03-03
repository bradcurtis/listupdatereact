import React, {Component} from 'react'; 
import {MemeDetail} from "./MemeDetail"


  
export default class MemeList extends Component { 
    constructor(props) 
    { 
        super(props); 
      
    }



    render() 
    { 
        console.log(this.props.persons)
        return(
            
            <ul>
           {this.props.persons.map((person) =>
                <MemeDetail person={person}></MemeDetail>
              )
              };
          </ul>
        )
    }

}
import React, {Component} from 'react'; 
import MemeList from "./MemeList"

  
export  class ChangeColor extends Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { color : '#4cb96b' }; 
        
    }
    

  
  
    getClick() 
    { 
        if (this.state.color === '#4cb96b') 
            this.setState({ color : '#aaa' }); 
        else
            this.setState({ color : '#4cb96b' }); 

           
    }   
    render() 
    { 
        
     
        return <div>
           <h1 style = { this.state }  
                   onClick = {this.getClick.bind(this)}> 
               {this.props.title}          
              
           

               </h1> 

<MemeList persons={this.props.persons}></MemeList>
</div>
               
  } 
}   
  

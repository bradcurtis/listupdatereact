import React, {Component} from 'react'; 
import {EmployeeListDetail} from './EmployeeListDetail'


 export default  class ItemDetail extends Component { 
 
    constructor(props) 
    { 
        super(props);  
        this.state = { display : 'none' }; 
    }

  

    onItemClickHandler(item, e){
        console.log("test");
        console.log(item)
        if (this.state.display === 'none') 
        this.setState({ display : 'block' }); 
    else
        this.setState({ display : 'none' }); 

        
      }


    render() 
    { 
      //check for null teleworker
       if(this.props.item.TeleworkerName){
        return(
       <li 
                onClick = {this.onItemClickHandler.bind(this,this.props.item)} >
        {this.props.item.Title}
        <div style = { this.state } >
           
           <div><h2>Name:  {this.props.item.TeleworkerName.Name}</h2></div>
                                    
           

            <label for="fname">Office:</label>
            <input type="text" id="fname" name="fname" value={this.props.item.Office} />
            
            <label for="lname">Position Ttile: </label>
            <input type="text" id="lname" name="lname" value={this.props.item.PositionTitle} />
           
           
           
            <button>Update Item</button>
            
        </div>
        </li> 
        )
    }
    return (<p>missing teleworker name</p>)
    }

}

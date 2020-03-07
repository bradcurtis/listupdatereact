import React, {Component} from 'react'; 

import EmployeeListDetail from './EmployeeListDetail'


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

      if (this.state.display === "none" || !this.props.item.TeleworkerName){
          return(
            <li 
            onClick = {this.onItemClickHandler.bind(this,this.props.item)} >{this.props.item.Title} </li>
          )
      }
       if(this.props.item.TeleworkerName.Name && this.state.display === "block" ){
        return(
       <li 
                onClick = {this.onItemClickHandler.bind(this,this.props.item)} >
        {this.props.item.Title}
        <div style = { this.state } >
           
           <div><h2>Telework List Information</h2></div>

           <div>Name:  {this.props.item.TeleworkerName.Name}</div>
           <div> Office:   {this.props.item.Office}  </div>
           <div> Title:   {this.props.item.PositionTitle} </div>


           <EmployeeListDetail employee={this.props.item.TeleworkerName.SIPAddress}></EmployeeListDetail>
                                    
            
           
           
            <button>Update Item</button>
            
        </div>
        </li> 
        )

        
    }
    return (<p>missing teleworker name</p>)
   
    }

}

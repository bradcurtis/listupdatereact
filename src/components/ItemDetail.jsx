import React, {Component} from 'react'; 

import EmployeeListDetail from './EmployeeListDetail'
import AdminCodeDetail from './AdminCodeDetail'




 export default  class ItemDetail extends Component { 
 
    constructor(props) 
    { 
        super(props);  
        this.state = { display : 'none' }; 
       
    }

  

    onItemClickHandler(item, e){
        console.log("changing state");
        this.setState({ state: this.state });
        
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
           <div> Admin Code:   {this.props.item.AdminCode} </div>
           <div> Email Address:  {this.props.item.TeleworkerName.WorkEMail}</div>
           <div> Email Account:  {this.props.item.TeleworkerName.Account}</div>
           


           <EmployeeListDetail key={"EmployeeDetail"+this.props.item.Id} employee={encodeURIComponent(this.props.item.TeleworkerName.WorkEMail)}></EmployeeListDetail>

           <AdminCodeDetail key={"AdminCode"+this.props.item.Id} admincode={this.props.item.AdminCode}></AdminCodeDetail>

           

          
                                    
            
           
           
            <button>Update Item</button>
            
        </div>
        </li> 
        )

        
    }
    return (<p>missing teleworker name</p>)
   
    }

}

import React, {Component} from 'react'; 

 export default class ItemDetail extends Component { 
 
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
        return(
       <li 
                onClick = {this.onItemClickHandler.bind(this,this.props.item)} >
        {this.props.item.label}
        <div style = { this.state } >
           

            <label for="fname">Office:</label>
            <input type="text" id="fname" name="fname" value={this.props.item.id} />
            
            <label for="lname">HR Id: </label>
            <input type="text" id="lname" name="lname" value={this.props.item.id} />
           
           
           
            <button>Update Item</button>
            
        </div>
        </li> 
        )
    }

}
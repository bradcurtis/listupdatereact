import React, {Component} from 'react'; 

export  class MemeDetail extends Component { 
 
    constructor(props) 
    { 
        super(props);  
        this.state = { display : 'none' }; 
    }

    onItemClickHandler(person, e){
        console.log("test");
        console.log(person)
        if (this.state.display === 'none') 
        this.setState({ display : 'block' }); 
    else
        this.setState({ display : 'none' }); 

        
      }


    render() 
    { 
        return(
       <li 
                onClick = {this.onItemClickHandler.bind(this,this.props.person)} >
        {this.props.person.title}
        <div style = { this.state } >
            <div>
            {this.props.person.url}
            </div>
            <div>
            <button>Update Item</button>
            </div>
        </div>
        </li> 
        )
    }

}
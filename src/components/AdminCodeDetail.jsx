import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import {admincodesFetchData} from '../actions/admincodes'




  class AdminCodeDetail extends Component { 
 
    constructor(props) 
    { 
        super(props);  
    }

    componentDidMount() {

        if(this.props.admincode){
        console.log("I found this admin code:" + this.props.admincode);
    
       // /http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
        this.props.AdminCodefetchData("http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/AdminCodeData?$filter=AdminCode eq '"+this.props.admincode+"'")
    }
    else{
        console.log("did not find an admin code")
    }
    }

   
    render() 
    { 

        console.log("Admin Code Render" + this.props.AdminCodeDetailItem)

        if (this.props.AdminCodehasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.AdminCodeisLoading) {
            console.log("Is loading")
            return <p>Loading…</p>;
        }
        
        if (this.props.AdminCodeDetailItem && this.props.AdminCodeDetailItem[0] && this.props.AdminCodeDetailItem[0].AdminCode){
        console.log("Admin Code detail:" + this.props.AdminCodeDetailItem[0])
        return(
      
           <div>
            <div><h2>AdminCode List Information</h2></div>
           <div>Admin Code:  {this.props.AdminCodeDetailItem[0].AdminCode}</div>
           <div> Super Office:   {this.props.AdminCodeDetailItem[0].SuperOffice}   </div>
           <div> Office:    {this.props.AdminCodeDetailItem[0].Office} </div>
           <div> Division:    {this.props.AdminCodeDetailItem[0].Division} </div>
           <div> Branch:    {this.props.AdminCodeDetailItem[0].Branch} </div>
             </div>                          
           
        )

        
        
    }

    return( <p>Default message</p> )
    }

}
//item detail is really employee list
AdminCodeDetail.propTypes = {
    AdminCodefetchData: propTypes.func.isRequired,
    AdminCodeDetailItem: propTypes.array.isRequired,
    AdminCodehasErrored: propTypes.bool.isRequired,
    AdminCodeisLoading: propTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        AdminCodeDetailItem: state.admincodes,
        AdminCodehasErrored: state.admincodesHasErrored,
        AdminCodeisLoading: state.admincodesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AdminCodefetchData: (url) => dispatch(admincodesFetchData(url))
                                              
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AdminCodeDetail);
import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { itemdetailsFetchData } from '../actions/itemdetails';


  export class EmployeeListDetail extends Component { 
 
    constructor(props) 
    { 
        super(props);  
        this.state = { display : 'none' }; 
    }

    componentDidMount() {
       // /http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
        //this.props.EmployeeListDetailfetchData("http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'")

    }

   
    render() 
    { 

        if (this.props.EmployeeListDetailhasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.EmployeeListDetailisLoading) {
            console.log("Is loading")
            return <p>Loading…</p>;
        }
        
        if (this.props.EmployeeListDetailitemdetail){
        console.log("employee detail:" + this.props.EmployeeListDetailitemdetail)
        return(
      
           
           <div><h2>Name:  {this.props.EmployeeListDetailitemdetail.ADAccount.Name}</h2></div>
                                       
           
        )
    }
    }

}
//item detail is really employee list
EmployeeListDetail.propTypes = {
    EmployeeListDetailfetchData: propTypes.func.isRequired,
    EmployeeListDetailitemdetail: propTypes.array.isRequired,
    EmployeeListDetailhasErrored: propTypes.bool.isRequired,
    EmployeeListDetailisLoading: propTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        EmployeeListDetailitemdetail: state.itemdetails,
        EmployeeListDetailhasErrored: state.itemdetailsHasErrored,
        EmployeeListDetailisLoading: state.itemdetailsIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        EmployeeListDetailfetchData: (url) => dispatch(itemdetailsFetchData(url))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListDetail);
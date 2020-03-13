import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import { itemdetailsFetchData } from '../actions/itemdetails';
import AdminCodeDetail from './AdminCodeDetail'




  class EmployeeListDetail extends Component { 
 
    

    componentDidMount() {

        if(this.props.employee){
        console.log(this.props.employee);
    
       // /http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
        this.props.EmployeeListDetailfetchData("http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount&$filter=ADAccount/WorkEMail eq '"+this.props.employee+"'")
    }
    }

   
    render() 
    { 

        console.log("render" + this.props.EmployeeListDetailitemdetail)

        if (this.props.EmployeeListDetailhasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.EmployeeListDetailisLoading) {
            console.log("Is loading")
            return <p>Loading…</p>;
        }
        
        if (this.props.EmployeeListDetailitemdetail && this.props.EmployeeListDetailitemdetail[0] && this.props.EmployeeListDetailitemdetail[0].EmployeeName){
        console.log("employee detail:" + this.props.EmployeeListDetailitemdetail)
        return(
      
           <div>
            <div><h2>Employee List Information</h2></div>
           <div>Name:  {this.props.EmployeeListDetailitemdetail[0].EmployeeName}</div>
           <div> CAPHRID:   {this.props.EmployeeListDetailitemdetail[0].CAPHRID}   </div>
           <div> AdminCode:    {this.props.EmployeeListDetailitemdetail[0].AdminCode} </div>
           <div> OcupSeries:    {this.props.EmployeeListDetailitemdetail[0].OcupSeries} </div>
           <div> Grade:    {this.props.EmployeeListDetailitemdetail[0].Grade} </div>
           <div>BUCode:  {this.props.EmployeeListDetailitemdetail[0].BUCode} </div>
           <div> JobTtile:  {this.props.EmployeeListDetailitemdetail[0].JobTitle} </div>

           <AdminCodeDetail key={"AdminCode:"+this.props.EmployeeListDetailitemdetail[0].AdminCode} admincode={this.props.EmployeeListDetailitemdetail[0].AdminCode}></AdminCodeDetail>
           
             </div>                          
           
        )

        
        
    }

    return( 
        <div>
        <div><h2>Employee List Information</h2></div>
        <p>Missing Employee list data</p> 
        <p>{this.props.employee}</p>
        </div>
    
    )
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
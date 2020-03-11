import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import ItemDetail from "./ItemDetail";
import { itemsFetchData } from "../actions/items";

class ItemList extends Component {
  componentDidMount() {
    //this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
    //http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
    //this.props.fetchData(
    //  "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster?$expand=TeleworkerName&$filter=SuperOffice eq null&$orderby=Modified desc"
   // );
  }

  onItemClickHandler() {
    console.log("search click" + document.getElementById("lname").value);

    this.props.fetchData(
      "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster?$expand=TeleworkerName&$filter=TeleworkerName/LastName eq '" +
        document.getElementById("lname").value +
        "'and StatusValue eq 'Verified'&$orderby=Modified desc"
    );
  }

  updateItem(e) {
    console.log(
      "Bubble up office:  " +
        this.props.EmployeeListDetailitemdetail[0].AdminCode
    );
    console.log(
      "EmployeeName:  " +
        this.props.EmployeeListDetailitemdetail[0].EmployeeName
    );
    console.log("Grade:  " + this.props.EmployeeListDetailitemdetail[0].Grade);
    console.log(
      "OcupSeries:  " + this.props.EmployeeListDetailitemdetail[0].OcupSeries
    );
    console.log(
      "BUCode:  " + this.props.EmployeeListDetailitemdetail[0].BUCode
    );
    console.log(
      "JobTtile:  " + this.props.EmployeeListDetailitemdetail[0].JobTtile
    );
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.items) {
      return (
        <div>          
          <ul>
            {this.props.items
              .filter(
                items =>
                  items.Office == null &&
                  items.Title != "Historical Data Upload"
              )
              .map(item => (
                <ItemDetail key={item.Id} item={item}></ItemDetail>
              ))}
          </ul>
        </div>
      );
    }
  }
}

ItemList.propTypes = {
  fetchData: propTypes.func.isRequired,
  items: propTypes.array.isRequired,
  EmployeeListDetailitemdetail: propTypes.array.isRequired,
  hasErrored: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.items,
    EmployeeListDetailitemdetail: state.itemdetails,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

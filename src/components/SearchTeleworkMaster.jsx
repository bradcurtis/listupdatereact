import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { itemsFetchData, itemdetailsUpdateItem } from "../actions/items";

class SearchTeleworkMaster extends Component {
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
    console.log(
      "AdminCode List:  " + this.props.AdminCodeDetailItem[0].AdminCode
    );
    console.log(
      "AdminCode List Super Office:  " +
        this.props.AdminCodeDetailItem[0].SuperOffice
    );
    console.log(
      "AdminCode List Office:  " + this.props.AdminCodeDetailItem[0].Office
    );
    console.log(
      "AdminCode List Division:  " + this.props.AdminCodeDetailItem[0].Division
    );
    console.log("AdminCode List:  " + this.props.AdminCodeDetailItem[0].Branch);

    console.log(this.props.postData);
    this.props.postData();
  }

  render() {
    return (
      <div>
        Search: <br></br>
        <label>Last name:</label>
        <input type="text" id="lname" name="lNameBox" ref="lname"></input>{" "}
        <br></br>
        <button name="btnSearch" onClick={this.onItemClickHandler.bind(this)}>
          Search by Last Name
        </button>
        <button onClick={this.updateItem.bind(this)}>Update Item</button>
        <br></br>
      </div>
    );
  }
}

SearchTeleworkMaster.propTypes = {
  fetchData: propTypes.func.isRequired,
  items: propTypes.array.isRequired,
  EmployeeListDetailitemdetail: propTypes.array.isRequired,
  AdminCodeDetailItem: propTypes.array.isRequired,
  hasErrored: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.items,
    EmployeeListDetailitemdetail: state.itemdetails,
    postData: propTypes.func.isRequired,
    AdminCodeDetailItem: state.admincodes,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    postData: url => dispatch(itemdetailsUpdateItem(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTeleworkMaster);

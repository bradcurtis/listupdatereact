import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { itemsFetchData, itemdetailsUpdateItem } from "../actions/items";
import { itemdetailsIsLoading } from "../reducers/itemdetails";

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

    let updateItem = {};
    if (
      (!this.props.selectedItem.SuperOffice &&
        this.props.AdminCodeDetailItem[0].SuperOffice) ||
      this.props.selectedItem.SuperOffice !=
        this.props.AdminCodeDetailItem[0].SuperOffice
    )
      updateItem.SuperOffice = this.props.AdminCodeDetailItem[0].SuperOffice;
    if (
      (!this.props.selectedItem.Office &&
        this.props.AdminCodeDetailItem[0].Office) ||
      this.props.selectedItem.Office != this.props.AdminCodeDetailItem[0].Office
    )
      updateItem.Office = this.props.AdminCodeDetailItem[0].Office;
    if (
      (!this.props.selectedItem.Dvision &&
        this.props.AdminCodeDetailItem[0].Division) ||
      this.props.selectedItem.Dvision !=
        this.props.AdminCodeDetailItem[0].Division
    )
      updateItem.Dvision = this.props.AdminCodeDetailItem[0].Division;
    if (
      (!this.props.selectedItem.Branch &&
        this.props.AdminCodeDetailItem[0].Branch) ||
      this.props.selectedItem.Branch != this.props.AdminCodeDetailItem[0].Branch
    )
      updateItem.Branch = this.props.AdminCodeDetailItem[0].Branch;
    if (
      (!this.props.selectedItem.AdminCode &&
        this.props.AdminCodeDetailItem[0].AdminCode) ||
      this.props.selectedItem.AdminCode !=
        this.props.AdminCodeDetailItem[0].AdminCode
    )
      updateItem.AdminCode = this.props.AdminCodeDetailItem[0].AdminCode;
    if (
      (!this.props.selectedItem.BUCodeValue &&
        this.props.EmployeeListDetailitemdetail[0].BUCode) ||
      this.props.selectedItem.BUCodeValue !=
        this.props.EmployeeListDetailitemdetail[0].BUCode
    )
      updateItem.BUCodeValue = this.props.EmployeeListDetailitemdetail[0].BUCode;
    if (
      (!this.props.selectedItem.PositionTitle &&
        this.props.EmployeeListDetailitemdetail[0].JobTitle) ||
      this.props.selectedItem.PositionTitle !=
        this.props.EmployeeListDetailitemdetail[0].JobTitle
    )
      updateItem.PositionTitle = this.props.EmployeeListDetailitemdetail[0].JobTitle;
    if (
      (!this.props.selectedItem.Grade &&
        this.props.EmployeeListDetailitemdetail[0].Grade) ||
      this.props.selectedItem.Grade !=
        this.props.EmployeeListDetailitemdetail[0].Grade
    )
      updateItem.GradeValue = this.props.EmployeeListDetailitemdetail[0].Grade;

    if (
      (!this.props.selectedItem.Series &&
        this.props.EmployeeListDetailitemdetail[0].OcupSeries) ||
      this.props.selectedItem.Series !=
        this.props.EmployeeListDetailitemdetail[0].OcupSeries
    )
      updateItem.Series = this.props.EmployeeListDetailitemdetail[0].OcupSeries;

    if (Object.keys(updateItem).length > 0)
      this.props.postData(this.props.selectedItem, updateItem);

    this.props.fetchData(
      "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkMaster?$expand=TeleworkerName&$filter=TeleworkerName/LastName eq '" +
        document.getElementById("lname").value +
        "'and StatusValue eq 'Verified'&$orderby=Modified desc"
    );
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
  selectedItem: propTypes.object.isRequired,
  EmployeeListDetailitemdetail: propTypes.array.isRequired,
  AdminCodeDetailItem: propTypes.array.isRequired,
  hasErrored: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
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
    postData: (selectedItem, updateItem) =>
      dispatch(itemdetailsUpdateItem(selectedItem, updateItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTeleworkMaster);

import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { reportItemsFetchData } from "../actions/reportitems";
import ReportItemDetail from "./ReportItemDetail"

class ReportItemList extends Component {
 

  componentDidMount() {
    

      // /http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
      this.props.fetchData(
        "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkReporting?$expand=TeleworkerName&$top=50&$skip=100"
      );
    
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.reportItems) {
      return (
        <div>
          <ul>
            {this.props.reportItems
              .filter(
                items =>
                  items.Title != "Historical Data Upload"
              )
              .map(item => (
                <ReportItemDetail
                  key={item.Id}
                  item={item}
                ></ReportItemDetail>
              ))}
          </ul>
        </div>
      );
    }

   return <h1>hello world</h1>;
  }
}

ReportItemList.propTypes = {
  fetchData: propTypes.func.isRequired,
  reportItems: propTypes.array.isRequired,
  hasErrored: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    reportItems: state.reportItems,
    hasErrored: state.reportItemsHasErrored,
    isLoading: state.reportItemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(reportItemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportItemList);

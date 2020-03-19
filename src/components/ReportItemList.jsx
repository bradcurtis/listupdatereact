import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { reportItemsFetchData } from "../actions/reportitems";
import ReportItemDetail from "./ReportItemDetail";
import { Pagination } from "./Pagination";

class ReportItemList extends Component {
  constructor() {
    super();

    this.state = {
      pageOfItems: [],
      skip: 200,
      top: 200
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.onCallNext = this.onCallNext.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  onCallNext(nextskip) {
    this.setState({skip: this.state.skip+this.state.top})
    this.props.fetchData(
      "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkReporting?$expand=TeleworkerName&$top=50&$skip=" +
      this.state.skip
    );
  }

  componentDidMount() {
    // /http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/CDEREmployees?$expand=ADAccount/SIPAddress&$filter=ADAccount/SIPAddress eq 'Robert.Lim@fda.hhs.gov'
    this.props.fetchData(
      "http://sharepoint.fda.gov/orgs/CDER-OMDMSSvc/TeleworkMgmt/_vti_bin/ListData.svc/TeleworkReporting?$expand=TeleworkerName&$top=50&$skip=200"
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
          <Pagination
            items={this.props.reportItems}
            skip={this.state.skip}
            top={this.state.top}
            onChangePage={this.onChangePage}
            onCallNext={this.onCallNext}
          />
          {this.state.pageOfItems.map(item => (
            <div>
              <ReportItemDetail key={item.Id} item={item}></ReportItemDetail>
            </div>
          ))}

          <ul>
            {this.props.reportItems
              .filter(items => items.Title != "Historical Data Upload")
              .map(item => (
                <ReportItemDetail key={item.Id} item={item}></ReportItemDetail>
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

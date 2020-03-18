import React, { Component } from "react";

import EmployeeListDetail from "./EmployeeListDetail";

export default class ReportItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { display: "none" };
  }

  onItemClickHandler(item, e) {
    console.log("changing state");
    if (e.target.tagName == "LI") {
      if (this.state.display === "none") this.setState({ display: "block" });
      else this.setState({ display: "none" });
     
    }
  }

  render() {
    //check for null teleworker

    if (this.state.display === "none" && this.props.item.TeleworkerName && this.props.item.TeleworkerName.Name) {
      return (
        <li onClick={this.onItemClickHandler.bind(this, this.props.item)}>
          {this.props.item.TeleworkerName.Name}:{this.props.item.Title}
        </li>
      );
    }
    if (this.state.display === "block" && this.props.item.TeleworkerName && this.props.item.TeleworkerName.Name) {
      return (
        <li onClick={this.onItemClickHandler.bind(this, this.props.item)}>
          {this.props.item.TeleworkerName.Name}:{this.props.item.Title}
          <div style={this.state}>            

            <EmployeeListDetail
              key={"EmployeeDetail:" + this.props.item.Id}
              employee={encodeURIComponent(
                this.props.item.TeleworkerName.WorkEMail
              )}
            ></EmployeeListDetail>
          </div>
        </li>
      );
    }
    return <li>missing teleworker name</li>;
  }
}

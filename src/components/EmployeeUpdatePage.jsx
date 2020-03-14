import React, { Component } from "react";
import { connect } from "react-redux";
import SearchTeleworkMaster from "./SearchTeleworkMaster";
import ItemList from "./ItemList";

export class EmployeeUpdatePage extends Component {
  connstructor(props) {
    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter(item) {
    console.log("we finally found this guy" + item.Id);
  }

  render() {
    return (
      <div>
        <SearchTeleworkMaster></SearchTeleworkMaster>
        <ItemList handleCounter={this.handleCounter}></ItemList>
      </div>
    );
  }
}

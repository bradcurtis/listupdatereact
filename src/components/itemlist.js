import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import ItemDetail from "./ItemDetail";
import { itemsFetchData, setSelectedItem } from "../actions/items";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: {} };
    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter(item) {
    console.log("we finally found this guy" + item.Id);
    this.props.setSelected(item);
    this.props.handleCounter(item);
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
                <ItemDetail
                  key={item.Id}
                  item={item}
                  handleCounter={this.handleCounter}
                ></ItemDetail>
              ))}
          </ul>
        </div>
      );
    }
  }
}

ItemList.propTypes = {
  fetchData: propTypes.func.isRequired,
  setSelected: propTypes.func.isRequired,
  items: propTypes.array.isRequired,
  selectedItem: propTypes.object.isRequired,
  EmployeeListDetailitemdetail: propTypes.array.isRequired,
  hasErrored: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    items: state.items,
    selectedItem: state.selectedItem,
    EmployeeListDetailitemdetail: state.itemdetails,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    setSelected: item => dispatch(setSelectedItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import SearchTeleworkMaster from './SearchTeleworkMaster'
import ItemList from './ItemList'

export  class EmployeeUpdatePage extends Component {

    render(){
      return(
          <div>
        <SearchTeleworkMaster></SearchTeleworkMaster>
        <ItemList></ItemList>
        </div>
      );

    }

}
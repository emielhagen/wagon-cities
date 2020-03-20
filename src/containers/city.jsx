import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city)
  }

  render() {
    return(
      <div className="city" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity: selectCity }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(City);

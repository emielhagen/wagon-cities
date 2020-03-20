import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SelectedCity extends Component {
  render() {
    let selected_city = null

    if(this.props.selectedCity) {
      const { name, address, slug } = this.props.selectedCity
      const src_url = `https://kitt.lewagon.com/placeholder/cities/${slug}`
      selected_city =
      <div>
        <h1>{name}</h1>
        <h6>{address}</h6>
        <img src={src_url} alt=""/>
      </div>
    }
    return(
      <div className="active-city">
        {selected_city}
      </div>
    )
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedCity: reduxState.selectedCity
  }
}

export default connect(mapReduxStateToProps)(SelectedCity);

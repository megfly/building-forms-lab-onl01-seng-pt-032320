import React, { Component } from 'react'
//connecting to the global state store so it knows bands
import { connect } from 'react-redux';
//importing bandinput in order to pass data to it
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  render() {
    console.log("props is", this.props)

    let bandsList = this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })

    return(
    // The dispatched action required to initiate this submit btn update should 
    //be set up in BandsContainer and passed down as the prop addBand to BandInput.
      <div>
        {/* BandsContainer */}
        <BandInput addBand={this.props.addBand} />
        <br />
        {bandsList}
      </div>
    )
  }
}

//shopping at the store 
const mapStateToProps = state => {
  //must return object 
  return {
    bands: state.bands
  }
}

//actions?
const mapDispatchToProps = dispatch => {
  return {
    addBand: band => {
      dispatch({ type: "ADD_BAND", band })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);

//This component should act as your connection to the Redux store and should be a 
//child of the App component. Any values we want to use from Redux as well as any 
//actions we want to dispatch should be set 
//up and available in BandsContainer so they can be passed down to other components.

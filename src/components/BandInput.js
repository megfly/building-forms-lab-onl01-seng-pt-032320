// Add BandInput component
import React, { Component } from 'react'

//functional components are stateless, if we want to use stte we need to change to class
class BandInput extends Component {

  //initial state with text key set to empty string...
state = {
  //setup controlled form wiht internal state
  name: ''
}

handleOnChange = event => {
  console.log(event.target.value)
  this.setState({
    name: event.target.value
  })
}

handleOnSubmit = event => {
  event.preventDefault()
  this.props.addBand(this.state)
  this.setState({
    name: ''
  })
}

  render() {
    return(
      <div className="container">
        <form onSubmit={this.handleOnSubmit} className="band-input">
          {/* band input has a text input field */}
          <input
            type="text"
            onChange={this.handleOnChange}
            name="band-input"
            value={this.state.name}
          />
          <input type="Submit" />
        </form>
      </div>
    )
  }
}



export default BandInput

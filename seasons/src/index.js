import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { lat: 'Loading', errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      //success callback
      position => {
        this.setState({ lat: position.coords.latitude })
      },
      //failure callback
      err =>
        this.setState({
          errorMessage: err.message
        })
    )
  }

  // React says we have to define render!!
  render() {
    const msg =
      this.state.errorMessage === ''
        ? `Latitude: ${this.state.lat}`
        : `Error: ${this.state.errorMessage}`
    return <div>{msg}</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))

//  Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

//  Create a React Component

const App = () => {
  const buttonText = 'Click Me!!'
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  )
}
// Take React component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))

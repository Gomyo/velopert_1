import React, { Component } from 'react'
import A from './LifeCycleSample'
import ErrorBoundary from './ErrorBoundary'

function getRanCol() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
  state = {
    color: '#000000',
  }
  handleClick = () => {
    this.setState({
      color: getRanCol(),
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <A color={this.state.color} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App

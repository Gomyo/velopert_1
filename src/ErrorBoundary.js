import React, { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    })
    console.log({ error, info })
  }
  render() {
    if (this.state.error) return <div>An error ocurred!!</div>
    return this.props.children
  }
}

export default ErrorBoundary

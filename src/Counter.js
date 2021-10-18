import React, { Component } from 'react'

class Counter extends Component {
  state = {
    number: 0,
    fixNum: 0,
  }
  render() {
    const { number, fixNum } = this.state
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixNum}</h2>
        <button
          onClick={() => {
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              }
            })
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log('setState 호출됨')
                console.log(this.state)
              },
            )
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Counter

import React, { Component } from 'react'
import A from './ScrollBox'

class App extends Component {
  render() {
    return (
      <div>
        <A ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}

export default App

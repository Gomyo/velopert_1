import React, { Component } from 'react'

class EventPracticeClass extends Component {
  state = {
    username: '',
    message: '',
  }
  // 함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버린다.
  // 이 때문에 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩해야 한다.
  // 바인딩하지 않으면 this가 undefined를 가리키게 된다.
  // 바인딩을 사용하지 않기 위해서라면 Arrow Function을 사용한다.
  /**
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  */

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message)
    this.setState({
      username: '',
      message: '',
    })
  }
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick()
    }
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="input something"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>alert/init</button>
      </div>
    )
  }
}

export default EventPracticeClass

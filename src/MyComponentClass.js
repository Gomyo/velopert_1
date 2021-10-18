import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MyComponentClass extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props
    return (
      <div>
        제 {name}입니다.!! <br />
        childeren 값은 {children} 입니다. <br />
        좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    )
  }
}

MyComponentClass.defaultProps = {
  name: '기본 이름',
}

MyComponentClass.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponentClass

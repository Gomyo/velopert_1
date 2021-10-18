import React from 'react'
import PropTypes from 'prop-types'

const MyComponentFunc = (props) => {
  const { name, children, favoriteNumber } = props
  return (
    <div>
      제 {name}입니다. <br />
      childeren 값은 {children} 입니다. <br />
      좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  )
}
MyComponentFunc.defaultProps = {
  name: '기본 이름',
}

MyComponentFunc.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
}

export default MyComponentFunc

import React from 'react'
import PropTypes from 'prop-types'
import './CountryFlag.css'

const CountryFlag = ({ imgSrc }) => {
  return (
    <img
      id='flag'
      src={imgSrc}
      alt='displayed nation flag'
      height='200'
      width='300'
    />
  )
}

CountryFlag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default CountryFlag

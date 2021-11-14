import React from 'react'
import PropTypes from 'prop-types'
import './CountryFlag.css'

const CountryFlag = ({ imgSrc }) => {
  return <img className='flag' src={imgSrc} alt='displayed nation flag' />
}

CountryFlag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default CountryFlag

import React from 'react'
import PropTypes from 'prop-types'

const CountryFlag = ({ imgSrc }) => {
  return (
    <img
      data-testid='country-img'
      className='flag'
      src={imgSrc}
      alt='displayed nation flag'
    />
  )
}

CountryFlag.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default CountryFlag

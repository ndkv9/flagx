import React from 'react'
import PropTypes from 'prop-types'

const Answer = ({ country, answer }) => {
  return (
    <p onClick={() => answer(country.name.common)}>{country.name.common}</p>
  )
}

Answer.propTypes = {
  country: PropTypes.object.isRequired,
}

export default Answer

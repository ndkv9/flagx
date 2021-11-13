import React from 'react'

const LandingPage = ({ setIsStarted }) => {
  const handleClick = () => {
    setIsStarted(prev => !prev)
  }
  return (
    <div className='landing-page'>
      <h2>WELCOME!</h2>
      <button onClick={handleClick}>START</button>
    </div>
  )
}

export default LandingPage

import React from 'react'

const EndgamePage = ({
  score,
  setIsStarted,
  setIsEnded,
  setScore,
  setGuesses,
}) => {
  const handleRetry = () => {
    setIsEnded(prev => !prev)
    setIsStarted(prev => !prev)
    setScore(0)
    setGuesses(3)
  }
  return (
    <div className='end-game'>
      <h2>GAME OVER!</h2>
      <h3>YOUR SCORE IS {score}</h3>
      <button onClick={handleRetry}>RETRY</button>
    </div>
  )
}

export default EndgamePage

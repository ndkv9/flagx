import React, { useState } from 'react'
import CountryFlag from './Components/CountryFlag'
import Answer from './Components/Answer'
import EndgamePage from './Components/EndgamePage'
import LandingPage from './Components/LandingPage'
import Noti from './Components/Noti'
import {
  useCountries,
  useCountriesList,
  useSelectedCountry,
} from './hooks/helper'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [countriesList, setCountriesList] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [score, setScore] = useState(0)
  const [guesses, setGuesses] = useState(3)
  const [isEnded, setIsEnded] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(true)

  useCountries(setCountries)
  useCountriesList(setCountriesList, countries, score)
  useSelectedCountry(countriesList, setSelectedCountry)

  const handleAnswer = answer => {
    let timeoutID
    if (answer === selectedCountry.name.common) {
      setScore(score + 1)
    } else {
      if (timeoutID) {
        clearTimeout(timeoutID)
      }

      setGuesses(guesses - 1)
      setIsCorrect(false)
      timeoutID = setTimeout(() => {
        setIsCorrect(true)
      }, 2000)

      if (guesses === 1) {
        setIsEnded(true)
      }
    }
  }

  return (
    <div className='App'>
      <header>
        <div className='title'>
          {' '}
          <h2>FlagX</h2>
        </div>
        <div className='info'>
          <h2>Score: {score}</h2>
          <h2>Guesses: {guesses}</h2>
        </div>
      </header>

      <main>
        {!isEnded && isStarted && (
          <React.Fragment>
            <div className='noti-container'>{isCorrect ? null : <Noti />}</div>

            {selectedCountry && (
              <CountryFlag imgSrc={selectedCountry.flags.svg} />
            )}
            <div className='answers'>
              {countriesList &&
                countriesList.map(country => (
                  <Answer
                    country={country}
                    answer={handleAnswer}
                    key={country.capital}
                  />
                ))}
            </div>
          </React.Fragment>
        )}

        {!isStarted && <LandingPage setIsStarted={setIsStarted} />}
        {isEnded && (
          <EndgamePage
            score={score}
            setIsEnded={setIsEnded}
            setIsStarted={setIsStarted}
            setScore={setScore}
            setGuesses={setGuesses}
          />
        )}
      </main>
      <footer>Copyright Vu Nguyen, {new Date().getFullYear()}</footer>
    </div>
  )
}

export default App

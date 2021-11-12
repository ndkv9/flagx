import { useEffect } from 'react'
import axios from 'axios'

const useCountries = setCountries => {
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data)
    })
  }, [])
}

const useCountriesList = (setCountriesList, countries, score) => {
  useEffect(() => {
    const getCountries = (arr, n) => {
      const result = new Array(n)
      let len = arr.length
      let taken = new Array(len)
      if (n > len)
        throw new RangeError('getRandom: more elements taken than available')
      while (n--) {
        let x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }

      return result
    }

    if (countries) {
      setCountriesList(getCountries(countries, 4))
    }
  }, [countries, score])
}

const useSelectedCountry = (countriesList, setSelectedCountry) => {
  useEffect(() => {
    if (countriesList) {
      const rad = Math.floor(Math.random() * 4)
      setSelectedCountry(countriesList[rad])
    }
  }, [countriesList])
}

export { useCountries, useCountriesList, useSelectedCountry }

import { useState, useEffect, createContext } from 'react';

export const countryContext = createContext({
      countries: [],
      setThemeSwitch: ()=> null,
      themeSwitch : false
})

const CountryContext = ({ children }) => {

      const [countries, setCountries] = useState([])
      const [themeSwitch , setThemeSwitch] = useState(false)

      
const fetchCountries = async () => {

      try {
            
            const res = await fetch('https://restcountries.com/v2/all')
            const countriesArr = await res.json();

            setCountries(countriesArr)
            console.log(countriesArr)
            
      }
      catch (e) {
            alert(e)
            
      }

      
}

      useEffect(() => {
            fetchCountries()
      }, [])

      const value = {countries , themeSwitch , setThemeSwitch}
      
      return (
            <countryContext.Provider value={value}>
                  {children}
            </countryContext.Provider>
      )
      
}

export default CountryContext;
import { useState, useEffect, createContext } from 'react';

export const countryContext = createContext({
      countries: [],
      loaderIndicator: true,
      setThemeSwitch: ()=> null,
      themeSwitch: false,
})

const CountryContext = ({ children }) => {

      const [countries, setCountries] = useState([])
      const [themeSwitch, setThemeSwitch] = useState(false)
      const [loaderIndicator , setLoaderIndicator] = useState(true)

      
const fetchCountries = async () => {

      try {
            
            const res = await fetch('https://restcountries.com/v2/all')
            const countriesArr = await res.json();

            setCountries(countriesArr)
           

            console.log(countriesArr)
            
      }
      catch (e) {
            alert(e)
            setLoaderIndicator(false)
            
      }

      
}

      useEffect(() => {
            fetchCountries()
      }, [])

      const value = {countries , themeSwitch , setThemeSwitch ,  loaderIndicator}
      
      return (
            <countryContext.Provider value={value}>
                  {children}
            </countryContext.Provider>
      )
      
}

export default CountryContext;
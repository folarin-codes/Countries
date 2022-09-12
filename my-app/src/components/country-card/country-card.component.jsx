
import { useContext } from 'react'

import { countryContext } from '../../context/countryContext'

import './country-card.styles.css'

const CountryCard = ({ countryDetails }) => {

      const theme = useContext(countryContext)

      
      const { themeSwitch, setSelectedCountry } = theme

      
      const { flag, name, population, capital, region } = countryDetails


      const saveCountryObjectToLocalStorage = () => {

            localStorage.setItem("country details" , JSON.stringify(countryDetails))
            
      }
      

      const onClickHandler = () => {
            saveCountryObjectToLocalStorage()
            
      }
      
      return (
            <div onClick={ onClickHandler} className='country' style={{backgroundColor : themeSwitch ? ' hsl(209, 23%, 22%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)'}}>
                  <img className='country-flag' src={flag} alt={`${name} flag`} />
                  
                  <div className='country-details'>
                        <h2>{name}</h2>
                        <h3>Population : {population}</h3>
                        <h3>Region: {region}</h3>
                        <h3>Capital : {capital}</h3>
                  </div>

            </div>
      )
}

export default CountryCard;
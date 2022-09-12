import { useContext } from "react"

import { Link , useNavigate } from "react-router-dom"

import { countryContext } from "../../context/countryContext"

import './country-detail.styles.css'

const CountryDetail = () => {

  
      
      const countryDetails = useContext(countryContext)

      const themeSwitch = countryDetails.themeSwitch
   

      const parsedLocalStorageCountryData = JSON.parse(localStorage.getItem("country details"))

      console.log(parsedLocalStorageCountryData)

   
      
      const { name, population, region, capital, nativeName, topLevelDomain, subregion, currencies, languages, flag } = parsedLocalStorageCountryData

     
   
      
      return ( 
            <div className="country-detail-container" style={{backgroundColor : themeSwitch ? 'hsl(207, 26%, 17%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)'}}> 
                  <Link style={{marginTop:'2em' , display:'inline'}} to='/'>
                  <button style={{backgroundColor : themeSwitch ? 'hsl(209, 23%, 22%)' : 'white'}}>Back</button>
                        
                 </Link> 

                  <div className="container-primary">
                        <img alt={`The flag of ${name}`} src={flag} />
                        
                        <div>
                              <h2>{ name }</h2>
                              <h3>Native Name: {nativeName }</h3>
                              <h3>Population: {population }</h3>
                              <h3>Region:  {region }</h3>
                              <h3>Sub Region: { subregion}</h3>
                              <h3>Capital: {capital }</h3>

                        </div>

                        <span>
                              <h3>Top Level Domain: {topLevelDomain[0] }</h3>
                              <h3>Currencies: {currencies[0].name }</h3>
                              <h3>Languages: {languages[0].name }</h3>

                        </span>
                  </div>

            </div>
      )
}

export default CountryDetail;
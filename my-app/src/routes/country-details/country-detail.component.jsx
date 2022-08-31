import { useContext } from "react"

import { useLocation ,Link , useNavigate } from "react-router-dom"

import { countryContext } from "../../context/countryContext"

import './country-detail.styles.css'

const CountryDetail = () => {

      const navigate = useNavigate()

    

      

      const location = useLocation()
      const path = location.pathname.replace(/[^a-zA-Z ]/g, "")

      // console.log(`'${path}'`)

      const country = window.location.pathname

      // console.log( typeof country)
      
      const countryDetails = useContext(countryContext)

      const themeSwitch = countryDetails.themeSwitch

      const newArr = countryDetails.countries.filter((country) => {

            return country.name.toLowerCase().includes(`${path}`)

            
      })

   
      
      const { name, population, region, capital, nativeName, topLevelDomain, subregion, currencies, languages, flag } = newArr[0]

     

      window.onbeforeunload = (event) => {
            const e = event || window.event;
            // Cancel the event
            e.preventDefault();
            navigate('/')

            window.onload = () => {
                  navigate('/')
                  
            }

            // return navigate('/');

            if (e) {
                  e.returnValue = ''; // Legacy method for cross browser support
                  alert('page has loaded')

            }

            e.preventDefault()

            return navigate('/');; // Legacy method for cross browser support
           
      };
      
      
      return ( 
            <div className="country-detail-container" style={{backgroundColor : themeSwitch ? ' hsl(209, 23%, 22%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)'}}> 
                  <Link style={{marginTop:'2em'}} to='/'>
                  <button>Back</button>
                        
                 </Link> 

                  <div>
                        <img alt={`The flag of ${name}`} src={flag} />
                        
                        <div>
                              <h2>{ name }</h2>
                              <h3>Native Name : {nativeName }</h3>
                              <h3>Population : {population }</h3>
                              <h3>Region :{region }</h3>
                              <h3>Sub Region :{ subregion}</h3>
                              <h3>Capital : {capital }</h3>

                        </div>

                        <span>
                              <h3>Top Level Domain: {topLevelDomain[0] }</h3>
                              <h3>Currencies: {currencies[0].name }</h3>
                              <h3>Languages : {languages[0].name }</h3>

                        </span>
                  </div>

            </div>
      )
}

export default CountryDetail;
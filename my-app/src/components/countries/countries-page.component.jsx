import { useContext, useState , useEffect } from "react";

import { Link } from "react-router-dom";

import { countryContext } from "../../context/countryContext";

import CountryCard from "../country-card/country-card.component";

import SearchBox from "../searchbox/search-box.component";

import SelectBox from "../selectbox/select-box.component";

import './countries-page.styles.css'

const CountriesPage = () => {


    
      const countriesData = useContext(countryContext) 

      const { countries, loaderIndicator } = countriesData
          

      const [countryName, setCountryName] = useState('')
      const [region , setRegion] = useState('')

      const onSearchChange = (event) => {
    
        const name = event.target.value.toLowerCase();
    
        setCountryName(name)
           
      }

      const onSelectOption = (e) => {

            setRegion(e.target.value)
            
      }

      let filteredCountries = countries.filter((country) => {

            if (region == 'All' || region == '') {
                  return true
            }
            else if (country.region.toLowerCase() == region.toLowerCase()) {
                  return country.region.toLowerCase() == region.toLowerCase()
            }
          
            
      })

     let  newFilteredCountries = filteredCountries.filter((country) => {
            return country.name.toLowerCase().includes(countryName)
            
      })

      

      return (
            <div className="container">
                  
                  <div style={{marginBottom: '2em'}}>
                        
                     <SearchBox onChange={onSearchChange}/>

                     <SelectBox onSelectOption={onSelectOption}/>

                  </div>

                  <div className="country-component-container">
                        
                        {
                              countries[0] ?
                                    newFilteredCountries?.map((countryDetails) => {
                              
                              return (
                                    <Link to={countryDetails.name.toLowerCase()} key={countryDetails.name}  >
                                          
                                    <CountryCard countryDetails={countryDetails}/>

                                    </Link>
                              )
                              
                        }) : <span className="loader" style={{display: loaderIndicator ? 'block' : 'none'}}></span>
                                          
                        } 
                        
                  </div>
                  
            </div>
      )
}

export default CountriesPage;
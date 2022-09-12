
import { useContext } from 'react';

import { countryContext } from '../../context/countryContext';

import CountriesPage from "../../components/countries/countries-page.component";

import './home.styles.css'

const Home = () => {

  
  const theme = useContext(countryContext)

  const { themeSwitch } = theme;

 
  
      return (
           
            
        <div className='back-container' style={{backgroundColor: themeSwitch ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)'  }}>
           
                  
          <div className="country-container">
                        
              <CountriesPage/>

          </div>
        </div>
        
           
      )
}

export default Home;
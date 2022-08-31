import { useContext } from 'react';

import { countryContext } from '../../context/countryContext';

import './search-box.styles.css'

const SearchBox = ({ onChange }) => {
      
      const theme = useContext(countryContext)

      const { themeSwitch } = theme;
      return (
            <>
                  <input className="search-box" type={'search'} onChange={ onChange} placeholder='Search for a country' style={{backgroundColor : themeSwitch ? ' hsl(209, 23%, 22%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)' }}  />

            </>
      )
}

export default SearchBox;
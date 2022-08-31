import { useContext } from 'react';

import { countryContext } from '../../context/countryContext';

import './select-box.styles.css';

const SelectBox = ({ onSelectOption }) => {
      
      
      const theme = useContext(countryContext)

      const { themeSwitch } = theme;

      return (
            <>
                  <select className='select-box' placeholder="Filter by Region" onChange={onSelectOption} style={{backgroundColor : themeSwitch ? ' hsl(209, 23%, 22%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)' }}>
                        
                        <option value='All'>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='Americas'>Americas</option>
                        <option value='Asia'>Asia</option>
                        <option value='Oceania'>Oceania</option>
                        
                        <option value='Europe'>Europe</option>
                        
                 </select>
            </>
      )
}

export default SelectBox;
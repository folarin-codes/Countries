import { Outlet, Link } from 'react-router-dom';

import { useContext } from 'react';

import moonImg from '../../moon.png'

import { countryContext } from '../../context/countryContext'; 


import './navigation.styles.css'

const Navigation = () => {

      const theme = useContext(countryContext)

      const { setThemeSwitch , themeSwitch } = theme;

      const toggleSwitch = () => {

            setThemeSwitch(!themeSwitch)
      }

      return (
            <>
                  <div className='navigation' style={{backgroundColor : themeSwitch ? 'hsl(209, 23%, 22%)' : 'white' , color : themeSwitch ? 'white' : ' hsl(0, 0%, 52%)'}}>
                       <Link to='/'><h2> Where in the world?</h2></Link> 
                        <span className='toggle-span' onClick={toggleSwitch}> <img src={moonImg} className="image" /> Dark Mode</span>
                  </div>

                  <Outlet/>

            </>
          
      )
}

export default Navigation;
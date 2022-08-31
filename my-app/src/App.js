import { Route , Routes } from 'react-router-dom'

import Home from "./routes/home/home.component"

import Navigation from './components/navigation/navigation.component'

import CountryDetail from './routes/country-details/country-detail.component'


import './App.css'



const App = () => {
 
  
  return (

    <Routes>
      
      <Route path='/' element={<Navigation />}>
        
        <Route index element={<Home />} />
        <Route path='/*' element={<CountryDetail/>} />
      
      </Route>
        
    

    </Routes>
  )
}

export default App
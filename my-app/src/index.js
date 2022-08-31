
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import CountryContext from './context/countryContext';


const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    
    <ChakraProvider>
      
      <QueryClientProvider client={queryClient}>
        
        <BrowserRouter>
          
            <CountryContext>
               
              <App />
      
            </CountryContext>

        </BrowserRouter>

      </QueryClientProvider>
  
    </ChakraProvider>
 
  </React.StrictMode>
);


reportWebVitals();

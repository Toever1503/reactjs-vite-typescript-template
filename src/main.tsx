import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes';
import { Provider } from 'react-redux'
import './index.css'
import { store } from './stores';
import { ChakraProvider } from '@chakra-ui/react'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>,
    </Provider>
  </ChakraProvider>
)

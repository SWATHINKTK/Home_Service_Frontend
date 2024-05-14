import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'


import App from './App.tsx'
import './index.css'
import store from './store/configureStore.ts'
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.GOOGLE_ACCESS_ID!}>
      <Provider store={store}>
        <ToastContainer  autoClose={2500} theme="colored"/>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

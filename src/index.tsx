import { CircularProgress } from '@mui/material'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n/i18n'

if(process.env.NODE_ENV === 'development'){
  import('./mocks/browers').then(workerLib  => {
    const { worker } = workerLib
    worker.start()
  })
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={ <CircularProgress/> }>
          <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('container')
)
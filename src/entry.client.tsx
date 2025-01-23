import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import './styles/style.scss'
// import '@unocss/reset/tailwind.css'

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>
)

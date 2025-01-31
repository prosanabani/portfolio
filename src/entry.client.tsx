import { dynamicActivate } from './config/i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import './styles/style.scss'
import { HydratedRouter } from 'react-router/dom'
// import '@unocss/reset/tailwind.css'

dynamicActivate()

ReactDOM.hydrateRoot(
  document,
  <React.StrictMode>
    <HydratedRouter />
  </React.StrictMode>
)

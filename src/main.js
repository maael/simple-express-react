import React from 'react'
import { render } from 'react-dom'
import App from './components/app.jsx'

if (module.hot) module.hot.accept()

render(<App />, document.getElementById('app'))

/**
 * @fileoverview Entry point for the app. Add global imports here.
*/
import 'styles/index.scss'
import App from 'app/app.js'

import React from 'react'
import ReactDOM from 'react-dom'

const appContainer = document.getElementById('root')

ReactDOM.render(<App />, appContainer)
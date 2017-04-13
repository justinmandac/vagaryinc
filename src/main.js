/**
 * @fileoverview Entry point for the app. Add global imports here.
*/
import 'fonts/mohave/Mohave-Semibold.eot'
import 'fonts/mohave/Mohave-Semibold.ttf'
import 'fonts/mohave/Mohave-Semibold.woff'
import 'fonts/mohave/Mohave-Semibold.woff2'
import 'fonts/exo/Exo-Regular.ttf'

import 'styles/index.scss'
import App from 'app/app.js'

import React from 'react'
import ReactDOM from 'react-dom'

const appContainer = document.getElementById('root')

ReactDOM.render(<App />, appContainer)
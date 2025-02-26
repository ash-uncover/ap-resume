import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  Provider
} from 'react-redux'

import {
  HashRouter,
} from 'react-router-dom'

// Import icons
import 'lib/icons'

// Should be imported before first access to the reducers
import { store } from './store'
import { App } from './components/App'

let Router = HashRouter

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

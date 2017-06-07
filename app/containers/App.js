import React from 'react'
import { Provider } from 'react-redux'
import ComprinhaApp from './ComprinhaApp'
import Store from '../Store'

const App = () => (
  <Provider store={Store}>
    <ComprinhaApp />
  </Provider>
)

export default App
import React from 'react'
import { Provider } from 'react-redux'
import Store from '../stores/store.js'
import HomePage from '/home/homepage.jsx'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <HomePage/>
      </Provider>
    )
  }
}

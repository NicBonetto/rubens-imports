import React from 'react'
import { Provider } from 'react-redux'
import HomePage from './home/homepage.jsx'
import Store from '../store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <HomePage/>
      </Provider>
    )
  }
}

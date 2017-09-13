import React from 'react'
import { Provider } from 'react-redux'
import HomePage from './home/homepage.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    )
  }
}

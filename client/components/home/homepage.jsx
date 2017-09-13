import React from 'react'
import { connect } from 'react-redux'
import Greet from './greet.jsx'

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <Greet/>
      </div>
    )
  }
}

import React from 'react'
import { connect } from 'react-redux'
import Greet from './greet.jsx'
import Mission from './mission.jsx'
import Service from './service.jsx'
import Footer from '../footer.jsx'

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <Greet/>
        <Mission/>
        <Service/>
        <Footer/>
      </div>
    )
  }
}

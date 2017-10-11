import React from 'react'
import { connect } from 'react-redux'
import Greet from './greet.jsx'
import Mission from './mission.jsx'
import Service from './service.jsx'
import Footer from '../footer.jsx'
import NavBar from '../navbar.jsx'

export default class HomePage extends React.Component {
  render() {
    return (
      <div id="home">
        <NavBar/>
        <Greet/>
        <Mission/>
        <Service/>
        <Footer/>
      </div>
    )
  }
}

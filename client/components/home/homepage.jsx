import React from 'react'
import { connect } from 'react-redux'
import Greet from 'greet.jsx'
import History from 'history.jsx'
import Services from 'services.jsx'
import Footer from '../footer.jsx'

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid" id="home">
        <Greet/>
        <History/>
        <Services/>
        <Footer/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import NavBar from '../navbar.jsx'
import Footer from '../footer.jsx'
import General from './general-about.jsx'

class About extends Component {
    render() {
        return (
            <div id="about">
                <NavBar/>
                <General/>
                <Footer/>
            </div>
        )
    }
}

export default About
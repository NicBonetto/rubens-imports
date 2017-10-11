import React, { Component } from 'react'
import NavBar from '../navbar.jsx'
import Footer from '../footer.jsx'
import General from './general-about.jsx'
import MeetUs from './meet-us.jsx'

class About extends Component {
    render() {
        return (
            <div id="about">
                <NavBar/>
                <General/>
                <MeetUs/>
                <Footer/>
            </div>
        )
    }
}

export default About
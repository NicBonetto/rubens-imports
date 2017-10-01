import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <section className="container-fluid pull-right">
                <div className="col-md-8">
                    <div id="contact-container">
                        <header>
                            <h4>Contanct Information</h4>
                        </header>
                        <div>
                            <h6>Ruben's Imports</h6>
                        </div>
                        <div>
                            <a href="#">34134 Pacific Coast Highway Dana Point, CA 92629</a>
                        </div>
                        <div>
                            <p>Sales: (949) 350-9171</p>
                            <p>Service/Parts: (949) 493-5050</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact

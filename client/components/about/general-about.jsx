import React, { Component } from 'react'

class General extends Component {
    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <div id="general-container">
                                <header>
                                    <h2>About</h2>
                                    <hr/>
                                </header>
                            </div>
                            <div>
                                <p>Thank you for checking Ruben's Imports out.</p>
                                <p>We have a strong and committed service and sales staff with  many years experience satisfying our customer's needs. Feel free to browse our inventory online, request more information about vehicles, set up a test drive, or inquire about financing!</p>
                                <p>If you do not see what you are looking for, click on CarFinder, fill out a form, and we will let you know when a vehicle arrives that match your search. Or if you would rather discuss other options with our friendly sales staff, click on Directions for interactive driving directions and other contact information.</p>
                                <p>We look forward to serving you!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default General
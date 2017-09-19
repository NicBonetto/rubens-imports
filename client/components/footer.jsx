import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <section className="container-fluid" id="footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-links text-center">
                            <a className="link-font" href="#">Contact</a><span> | </span><a className="link-font" href="#">Services</a><span> | </span><a className="link-font" href="#">About Us</a><span> | </span><a className="link-font" href="#">Directions</a><span> | </span><a className="link-font" href="#">Privacy</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
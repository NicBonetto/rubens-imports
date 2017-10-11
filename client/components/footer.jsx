import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <section className="container-fluid" id="footer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-links text-center">
                            <a className="link-font" href="/contact-us">Contact</a><span> | </span><a className="link-font" href="/services/">Services</a><span> | </span><a className="link-font" href="/about-us">About Us</a><span> | </span><a className="link-font" href="/directions">Directions</a><span> | </span><a className="link-font" href="/private">Privacy</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
import React from 'react'

export default class Service extends React.Component {
    render() {
        return (
            <section className="container-fluid">
                <div className="row">
                  <div className="col-md-12 text-center heading-container">
                    <div className="heading-header">
                      <h1>Services</h1>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div id="service-page">
                      <div className="col-md-4 logos text-center">
                        <img src="/images/Porsche-Logo.png"/>
                      </div>
                      <div className="col-md-4 logos text-center">
                        <img src="/images/Mercedes-Benz-logo.png"/>
                      </div>
                      <div className="col-md-4 logos text-center">
                        <img src="/images/BMW-logo.png"/>
                      </div>
                  </div> 
                </div>
            </section>
        )
    }
}
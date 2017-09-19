import React from 'react'

export default class Greet extends React.Component {
  render() {
    return (
      <section className="container-fluid" id="greet">
        <div className="row">
          <div className="col-md-6 col-sm-offset-3 text-center" id='greet-header'>
            <div>
              <h3>Mercedes Benz, Porsche, and BMW.</h3>
            </div>
            <div>
            <h2>Unparalled service proven through our honesty, integrity, and quality.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-5 text-center chevron-margin-down">
            <span className="glyphicon glyphicon-menu-down chevron"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-md-offset-5 text-center chevron-margin-up">
            <span className="glyphicon glyphicon-menu-down chevron"></span>
          </div>
        </div>
      </section>
    )
  }
}

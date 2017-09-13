import React from 'react'

export default class Greet extends React.Component {
  render() {
    return (
      <section className="container-fluid" id="greet">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 text-center" id='greet-header'>
            <h2>Unparalled service proven through our honesty, integrity, and quality.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-sm-offset-5 text-center chevron-margin-down">
            <span className="glyphicon glyphicon-menu-down chevron"></span>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-sm-offset-5 text-center chevron-margin-up">
            <span className="glyphicon glyphicon-menu-down chevron"></span>
          </div>
        </div>
      </section>
    )
  }
}

import React from 'react'

export default class Mission extends React.Component {
  render() {
    return (
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center heading-container">
            <div className="heading-header">
              <h1>We Strive for Customer Satisfaction.</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 light-background">
            <div className="mission-text text-center">
              <header>
                <h2>Welcome to Ruben's Imports.</h2>
              </header>
              <div className="mission-text-width">
                <p>Rubens Imports in Dana Point, CA treats the needs of each individual customer with paramount concern. We know that you have high expectations, and as a car dealer we enjoy the challenge of meeting and exceeding those standards each and every time. Allow us to demonstrate our commitment to excellence!</p>
              </div>
              <div className="mission-text-width">
                <p>Our experienced sales staff is eager to share its knowledge and enthusiasm with you. We encourage you to browse our online inventory, schedule a test drive and investigate financing options. You can also request more information about a vehicle using our online form or by calling 949-350-9171.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 dark-background"></div>
        </div>
        <div className="row">
          <div className="dana-background col-md-6"></div>
          <div className="light-background col-md-6">
            <div className="mission-text text-center">
              <header>
                <h2>Our Story...</h2>
              </header>
              <div className="mission-text-width">
                <p>Ruben Giosa's passion for vehicles started when he was only 10 years old in Argentina. He worked on anything he could get his hands on, and eventually fell in love with Mercedes Benz cars. To learn all he could, Ruben volunteered to do free work for two years under an apprenticeship. During this apprenticeship, Ruben received unparalleled education from a German Mercedes Benz engineer.</p>
                <p>Ruben came to the United States in 1970, and worked hard to acheive his goal. In 1978, Ruben's Imports was established in Dana Point, California. It started off strictly as a Mercedes Benz service shop, but eventually expanded to other luxury vehicles.</p>
                <p>What started off as Ruben's passion has now turned into a family affair. Rafael Bonetto, Ruben's son-in-law manages Ruben's Imports alongside Ruben. Together, they have been serving Dana Point with exceptional service and have won multiple awards for customer satisfaction. Ruben's Imports is now celebrating over 35 years of success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

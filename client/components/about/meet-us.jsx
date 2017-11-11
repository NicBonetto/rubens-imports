import React, { Component } from 'react'
import team from '../../utils/team'

class MeetUs extends Component {
    renderTeam() {
        return team.map((person, index) => {
            return (
                <div key={index} className="col-md-5 person-container">
                    <div>
                        <img className="person-image" src={person.picture} />
                    </div>
                    <div>
                        <h5>{person.name}</h5>
                    </div>
                    <div>
                        <p>{person.description}</p>
                    </div>
            </div>
            )
        })
    }

    render() {
        return (
            <section className="constainer-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <header className="pull-left" id="meet-header">
                            <h3>Meet the Team</h3>
                        </header>
                    </div>
                    <div className="col-md-12">
                        <hr/>
                    </div>
                    {this.renderTeam()}
                </div>
            </section>
        )
    }
}

export default MeetUs
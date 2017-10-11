import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Store from '../store'

class NavBar extends React.Component {
    render() {
        return (
            <section className="container-fluid nav-bar">
                <div className="row">
                    <div className="col-sm-12">
                        <div>
                            <ul className="nav-bar-section text-center">
                                <div className={"nav-bar-item " + (this.props.active.home ? 'active' : '')} onClick={() => Store.dispatch({ type: 'HOME_ACTIVE' })}>
                                    <li><Link to="/">Home</Link></li>
                                </div>
                                <div className={"nav-bar-item " + (this.props.active.inventory ? 'active' : '')} onClick={() => Store.dispatch({ type: 'INVENTORY_ACTIVE' })}>
                                    <li><Link to="/services/sales/inventory">Car Inventory</Link></li>
                                </div>
                                <div className={"nav-bar-item " + (this.props.active.about ? 'active' : '')} onClick={() => Store.dispatch({ type: 'ABOUT_ACTIVE' })}>
                                    <li><Link to="/about-us">About Us</Link></li>
                                </div>
                                <div className={"nav-bar-item " + (this.props.active.directions ? 'active' : '')} onClick={() => Store.dispatch({ type: 'DIRECTIONS_ACTIVE' })}>
                                    <li><Link to="/directions">Directions</Link></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {active: state}
}

export default connect(mapStateToProps)(NavBar)
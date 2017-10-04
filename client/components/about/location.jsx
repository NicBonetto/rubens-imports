import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

export class MapContainer extends Component {
    render() {
        return (
            <section className="col-md-4 pull-right map-container">
                <Map 
                    google={this.props.google}
                    zoom={15}
                    initialCenter={{
                        lat: 33.466641,
                        lng: -117.702547
                    }}
                    style={{
                        height: '400px',
                        width: '350px',
                        marginLeft: '5vh'
                    }}
                >
                    <Marker
                        title={'Rubens Imports'}
                        name={'Rubens Imports'}
                    />
                </Map>
            </section>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-Je_iRxbSiXZ3vvVxf0My1esy3XzWhsc'
})(MapContainer)
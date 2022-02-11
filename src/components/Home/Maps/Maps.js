import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './Maps.css'
 
export class MapContainer extends Component {
    render() {
        return (
            <div className='maps'>
                <Map 
                    google={this.props.google} 
                    zoom={14} 
                    style={{width: "100%", height: '100%', overflow: 'hidden', position: 'relative'}}
                    initialCenter={
                        {
                            lat: 9.9682,
                            lng: 76.3182
                        }
                    }
                    className='map'
                />
            </div>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API
})(MapContainer)
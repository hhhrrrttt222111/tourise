import React, { useEffect } from 'react';
import mapboxgl from "mapbox-gl"

import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGhocnJydHR0MjIyMTExIiwiYSI6ImNrejEwd2M3ZjFocnkzMHAxamo5bGtkN3AifQ.iyU_N_pNhgj07g0dppBUvg';

function Map() {


    useEffect(() => {
        // eslint-disable-next-line
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [76.318116, 9.968597],
          zoom: 10
        });
      }, []);



    return (
        <div className='map'>
            <div className='mapRight'>
                <div className='mapContainer' id='map'>
                    
                </div>
            </div>
        </div>
    )
}

export default Map;

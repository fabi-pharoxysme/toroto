import React, { useState, useEffect } from "react"
import styles from './MapSection.module.scss'
import  ReactMapGL ,{ Marker} from 'react-map-gl'
// import 'mapbox-gl/dist/mapbox-gl.css';


const MapSection = () => {
    const [viewport, setViewport] = useState({
        latitude: 18.585740807974794,
        longitude: -98.07039570007933,
        zoom: 12 //13
      });
    return (
        <div className = {styles.container}>
            <p>Mapa de obras</p>
            <div>
                <ReactMapGL
                {...viewport}
                mapboxApiAccessToken = {'pk.eyJ1IjoiZmFiaS1waGFyb3h5c21lIiwiYSI6ImNrdmI4YmZkajJxdnkybnA2dG90cjN6YXEifQ.oqsFMoDorOWL8bmQFeb1fg'}
                width = "100%"
                height = "350px"
                mapStyle = 'mapbox://styles/mapbox/outdoors-v11'
                onViewportChange = {nextViewport => setViewport(nextViewport)}>
                    <Marker
                        latitude= {18.585740807974794}
                        longitude= {-98.07039570007933}
                        capturePointerMove = {true}>
                        <div className = {styles.marker}>
                            <div></div>
                        </div>
                    </Marker>
                </ReactMapGL>
            </div>
        </div>
    )
}

export default MapSection
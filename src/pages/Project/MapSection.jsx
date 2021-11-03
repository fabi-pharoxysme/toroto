import React, { useState, useContext } from "react"
import styles from './MapSection.module.scss'
import  ReactMapGL ,{ Marker} from 'react-map-gl'
import ProjectContext from "../../context/ProjectContext"
import 'mapbox-gl/dist/mapbox-gl.css';

const MapSection = () => {
    const {location,latitude,longitude} = useContext(ProjectContext)
    const [viewport, setViewport] = useState({
        latitude: 16.5000001,
        longitude: -92.5000001,
        zoom: 5,
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
                    {location.map(i=> (
                        <Marker
                            latitude= {i[1]}
                            longitude= {i[0]}
                            capturePointerMove = {true}>
                            <div className = {styles.marker}>
                                <div></div>
                            </div>
                        </Marker>
                    ))}
                    
                </ReactMapGL>
            </div>
        </div>
    )
}

export default MapSection
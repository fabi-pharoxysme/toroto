import React, { useState } from "react"
import classNames from 'classnames'
import styles from './MapSection.module.scss'
import Button from "../../primitives/buttons/Button"
import { Link } from 'react-router-dom'
import ReactMapGL, { StaticMap ,Popup , Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
 
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiZmFiaS1waGFyb3h5c21lIiwiYSI6ImNrdmI2NG1meDBkMmoydW1lM3pkZTFzcjYifQ.3H_gJyNMH4Ft5wXPpNsMXA';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

const MapSection = () => {
    const [ viewport, setViewport ] = useState({
        latitude: 22.5000486,
        longitude: -110.000037,
        // center: [
        //     -73.9749,
        //     40.7736
        //   ],
        zoom: 4.4
    })

    const [ selectedProject, setSelectedProject ] = useState(false)

    return (
        <div className = {classNames(styles.container)}>
            <div id = {'map-container'}>
                <div className = {classNames(styles.description)}>
                    <h1>Somos desarrolladores de proyectos</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s.
                    </p>
                    <Button variant = 'primary'>PROPONER UN PROYECTO</Button>
                </div>
                <div>
                    <Link>Ver lista completa de proyectos <span>^</span></Link>
                   
                </div>
                <StaticMap
                {...viewport}
                mapboxApiAccessToken = {'pk.eyJ1IjoiZmFiaS1waGFyb3h5c21lIiwiYSI6ImNrdmI4YmZkajJxdnkybnA2dG90cjN6YXEifQ.oqsFMoDorOWL8bmQFeb1fg'}
                width = "100vw"
                height = "748px"
                mapStyle = 'mapbox://styles/mapbox/streets-v11'
                >
                    <Marker
                        latitude= {22.5000486}
                        longitude= {-110.000037}
                        capturePointerMove = {true}>
                        <button className = {styles.marker} onMouseEnter = {(e) => {<Popup>
                            <div>
                                <div>
                                    
                                </div>
                            </div>
                        </Popup>}}></button>
                    </Marker>
                    {/* {selectedProject ? (
                        <Popup>
                            <div>
                                holi
                            </div>
                        </Popup>
                    ) : null } */}
                </StaticMap>
            </div>
        </div>
    )
}

export default MapSection
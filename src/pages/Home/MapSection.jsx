import React, { useState, useEffect } from "react"
import classNames from 'classnames'
import styles from './MapSection.module.scss'
import Button from "../../primitives/buttons/Button"
import { Link } from 'react-router-dom'
import { StaticMap ,Popup , Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import link  from '../../assets/icons/svg/chevron-down.svg' 
import CardMap from "../../primitives/cards/CardMap"
 
const MapSection = () => {
    // const [location, setLocation] = useState([])
    // const [ project, setProject] = useState([])
    const [ selectedProject, setSelectedProject ] = useState(false)
    const [ viewport, setViewport ] = useState({
        latitude: 22.5000486,
        longitude: -110.000037,
        zoom: 4.4
    })
    const [ project, setProject] = useState([])
    const [location,setLocation] = useState([])
    const url = 'https://fieldops-api.toroto.mx/api/projects'


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${url}`)
            const projects = await data.json()
            setProject(projects.data)
            setLocation(project.geometry)
        }
        fetchData()
    }, [])
    // const coordinates = [project.map(i => i.geometry.coordinates.map(item => item))]
    // console.log(coordinates)
    console.log(location)
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
                <div className = {styles.linkContainer}>
                    <Link className = {styles.link} >Ver lista completa de proyectos <img className = {styles.linkIcon} src = {link}/></Link>   
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
                        <Popup
                        >
                            <CardMap/>
                        </Popup>
                    ) : null } */}
                </StaticMap>
            </div>
        </div>
    )
}

export default MapSection
import React, { useState, useEffect,useContext } from "react"
import classNames from 'classnames'
import styles from './MapSection.module.scss'
import Button from "../../primitives/buttons/Button"
import { Link } from 'react-router-dom'
import { StaticMap ,Popup , Marker} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import link  from '../../assets/icons/svg/chevron-down.svg' 
import imgMobile  from '../../assets/img/header_img_mobile.png' 
import CardMap from "../../primitives/cards/CardMap"
import MainContext from "../../context/MainContext"
 
const MapSection = () => {
    const {location} = useContext(MainContext)
    const [ project, setProject] = useState([])
    const [ selectedProject, setSelectedProject ] = useState(false)
    const [ viewport, setViewport ] = useState({
        latitude: 22.5000486,
        longitude: -110.000037,
        zoom: 4.5
    })    
    const url = 'https://fieldops-api.toroto.mx/api/projects'

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${url}`)
            const projects = await data.json()
            setProject(projects.data)
        }
        fetchData()
    }, [url])
    
    const validation = (param, id)  => {
        switch (param) {
            case "P001":
                return <Marker key = {id}
                longitude = {-92.31740713119507}
                latitude = {15.188183227403146}>
                    <button className = {styles.marker} onMouseEnter = {() => setSelectedProject(project)}></button></Marker>
            case "P002": 
                return <Marker key = {id}
                longitude = { -90}
                latitude = {17.81930071664984}>
                    <button className = {styles.marker} onMouseEnter = {() => setSelectedProject(project)}></button></Marker>
            case "P003": 
            return <Marker key = {id}
            longitude = {-91.44401550292969}
            latitude = {17.258203517630033}>
                <button className = {styles.marker} onMouseEnter= {() => setSelectedProject(project)}></button></Marker>
            case "P004": 
            return <Marker key = {id}
            longitude = { -99.17017221450806}
            latitude = {19.422340858428164}>
                <button className = {styles.marker} onMouseEnter= {() => setSelectedProject(project)}></button></Marker>
            default:;
        }
    }
    return (
        <div className = {classNames(styles.container)}>
                <div className = {styles.imgMobile}>
                    <img src = {imgMobile} alt = ""/>
                </div>
                <div className = {classNames(styles.description)}>
                    <h1>Somos desarrolladores de proyectos</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s.
                    </p>
                    <Button variant = 'primary'>PROPONER UN PROYECTO</Button>
                </div>
                <div className = {styles.linkContainer}>
                    <Link className = {styles.link}  to = {'/'}>Ver lista completa de proyectos <img className = {styles.linkIcon} src = {link} alt = ''/></Link>   
                </div>
                <div className = {styles.mapContainer}>
                <StaticMap
                {...viewport}
                mapboxApiAccessToken = {'pk.eyJ1IjoiZmFiaS1waGFyb3h5c21lIiwiYSI6ImNrdmI4YmZkajJxdnkybnA2dG90cjN6YXEifQ.oqsFMoDorOWL8bmQFeb1fg'}
                width = "100vw"
                height = "748px"
                mapStyle = 'mapbox://styles/mapbox/streets-v11'
                >
                    {project.map(i => validation(i.id))}
                    {selectedProject ? (
                        <Popup 
                        key = {`popup-${project.id}`} longitude = {-92.31740713119507} latitude = {15.188183227403146} 
                        closeButton = {false}
                        className = {styles.popUp}                        
                        onClose = {()=> {setSelectedProject(null)}}>
                            <CardMap />
                         {selectedProject.map(item => <CardMap {...item}/>)}
                        </Popup>
                    ) : null }
                </StaticMap>
                </div>
        </div>
    )
}

export default MapSection
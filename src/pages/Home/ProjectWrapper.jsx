import React, { useState, useEffect } from "react"
import styles from './ProjectWrapper.module.scss'
import ProjectCard from "../../primitives/cards/ProjectCard"

const PorjectWrapper = () => {
    const [ project, setProject] = useState([])
    const url = 'https://fieldops-api.toroto.mx/api/projects'


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`${url}`)
            const projects = await data.json()
            setProject(projects.data)
        }
        fetchData()
    }, [])

    return ( 
        <div className = {styles.container}>
            <h3>Todos nuestros proyectos</h3>
            <div className = {styles.wrapper}>
                 {project.map(item => <ProjectCard {...item} key = {item.id}/>)}
            </div>
        </div>
    )
}

export default PorjectWrapper
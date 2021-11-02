import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import PageFrame from '../../primitives/layout/PageFrame'
import AboutProject from './AboutProject'
import ActivitySection from './ActivitySection'
import Gallery from './Gallery'
import Impact from './Impact'
import MapSection from './MapSection'
import styles from './Project.module.scss'
import ProjectProposal from './ProjectProposal'

const Project = () => {

    const { id } = useParams()

    const [dataProject, setDataProject] = useState()
    // const url = `https://fieldops-api.toroto.mx/api/project/"${id}"`

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://fieldops-api.toroto.mx/api/projects/${id}`)
            const projects = await data.json()
            setDataProject(projects.data[0])
        }
        fetchData()
    }, [id])    


    return (
        <>
            <PageFrame>
                <div className = {styles.containerPage}>
                    <AboutProject {...dataProject}/>
                    <ActivitySection/>
                    <MapSection/>
                    <Gallery/>
                    <Impact/>
                    <ProjectProposal/>
                </div>
            </PageFrame>
        </>
    )
}

export default Project
import React from 'react'
import { ProjectProvider } from '../../context/ProjectContext'
import PageFrame from '../../primitives/layout/PageFrame'
import AboutProject from './AboutProject'
import ActivitySection from './ActivitySection'
import Gallery from './Gallery'
import Impact from './Impact'
import MapSection from './MapSection'
import styles from './Project.module.scss'
import ProjectProposal from './ProjectProposal'

const Project = () => {  
    return (
        <>
            <PageFrame>
                <div className = {styles.containerPage}>
                    <ProjectProvider>
                        <AboutProject />
                        <ActivitySection/>
                        <MapSection/>
                        <Gallery/>
                        <Impact/>
                        <ProjectProposal/>
                    </ProjectProvider>
                </div>
            </PageFrame>
        </>
    )
}

export default Project
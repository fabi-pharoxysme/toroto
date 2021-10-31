import React from 'react'
import PageFrame from '../../primitives/layout/PageFrame'
import AboutProject from './AboutProject'
import ActivitySection from './ActivitySection'
import Gallery from './Gallery'
import Impact from './Impact'
import MapSection from './MapSection'
import styles from './Project.module.scss'

const Project = () => {
    return (
        <>
            <PageFrame>
                <div className = {styles.containerPage}>
                    <AboutProject/>
                    <ActivitySection/>
                    <MapSection/>
                    <Gallery/>
                    <Impact/>
                </div>
            </PageFrame>
        </>
    )
}

export default Project
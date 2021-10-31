import React from 'react'
import PageFrame from '../../primitives/layout/PageFrame'
import MapSection from './MapSection'
import ProjectWrapper from './ProjectWrapper'

const Home = () => {
    return (
        <>
            <PageFrame> 
                <MapSection/> 
                <ProjectWrapper/>  
            </PageFrame>            
        </>
    )
}

export default Home
import React from 'react'
import PageFrame from '../../primitives/layout/PageFrame'
import MapSection from './MapSection'
import ProjectWrapper from './ProjectWrapper'
import { MainProvider } from '../../context/MainContext'

const Home = () => {
    return (
        <>
            <PageFrame> 
                <MainProvider>
                    <MapSection/> 
                    <ProjectWrapper/>  
                </MainProvider>
            </PageFrame>            
        </>
    )
}

export default Home
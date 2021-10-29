import React from 'react'
import CardMap from '../../primitives/cards/CardMap'
import PageFrame from '../../primitives/layout/PageFrame'
import MapSection from './MapSection'

const Home = () => {
    return (
        <>
            <PageFrame> 
                <CardMap/>
                <MapSection/>
                
            </PageFrame>            
        </>
    )
}

export default Home
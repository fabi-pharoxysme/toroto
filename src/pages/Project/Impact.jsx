import React from 'react'
import GraphicCard from '../../primitives/cards/GraphicCard'
import styles from './Impact.module.scss'

const Impact = () => {
    return (
        <div className = {styles.container}>
            <h2>Impacto</h2>
            <div className = {styles.cardWrapper}>
            <GraphicCard/>
            <GraphicCard/>
            <GraphicCard/>
            <GraphicCard/>
            </div>
        </div>
    )
}

export default Impact
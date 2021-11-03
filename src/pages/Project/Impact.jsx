import React, {useContext} from 'react'
import ProjectContext from '../../context/ProjectContext'
import GraphicCard from '../../primitives/cards/GraphicCard'
import styles from './Impact.module.scss'

const Impact = () => {
    const {impact} = useContext(ProjectContext)
    return (
        <div className = {styles.container}>
            <h2>Impacto</h2>
            <div className = {styles.cardWrapper}>
            {impact.map(item=> <GraphicCard {...item}/>)}
            </div>
        </div>
    )
}

export default Impact
import React from 'react'
import Button from '../../primitives/buttons/Button'
import styles from './ProjectProposal.module.scss'

const ProjectProposal = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.content}>
                <h3>Somos desarrolladores de proyectos</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Button variant= 'primary'>proponer un proyecto</Button>
            </div>
        </div>
    )
}

export default ProjectProposal
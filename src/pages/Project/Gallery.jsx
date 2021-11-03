import React, {useContext} from 'react'
import styles from './Gallery.module.scss'
import ProjectContext from '../../context/ProjectContext'

const Gallery = () => {
    const {dataProject,img} = useContext(ProjectContext)
    return (
        <div className = {styles.container}>
            <p>Galería de imágenes</p>
            <div className = {styles.imgWrapper}>
            {img.map(i=> <img key = {i} className = {styles.img} src= {`${i}`} alt =''/>)}
            </div>
        </div>
    )
}

export default Gallery 
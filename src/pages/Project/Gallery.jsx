import React from 'react'
import styles from './Gallery.module.scss'
import { Image } from 'antd'

const Gallery = () => {
    return (
        <div className = {styles.container}>
            <p>Galería de imágenes</p>
            <div className = {styles.imgWrapper}>
            {/* falta el grid de las imgenes */}
            <p>holi</p>
            <p>holi</p>
            <p>holi</p>
            <p>holi</p>
            <p>holi</p>
            </div>
        </div>
    )
}

export default Gallery 
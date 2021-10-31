import React from "react"
import styles from './GraphicCard.module.scss'

const GraphicCard = ({name, value}) => {
    return (
        <div className = {styles.container}>
            <h2>{value= '100'}</h2>
            <div className = {styles.box}>
                <p>{name = 'HECTÁREAS ABARCADAS'}</p>
            </div>
        </div>
    )
}

export default GraphicCard
import React from "react"
import classNames from 'classnames'
import styles from './CardMap.module.scss'

const CardMap = ({localization, name, about}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.imgContainer}>
                <img/>
            </div>
            <div className = {styles.description}>
                <span>{localization = 'Región donde se ubica, Estado.'}</span>
                <h3>{name = 'Región donde se ubica, Estado.'}</h3>
                <p>
                    {about = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took."}
                </p>

            </div>
        </div>
    )
}

export default CardMap
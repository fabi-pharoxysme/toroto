import React from 'react'
import styles from './ActivitySection.module.scss'
import questionIcon from '../../assets/icons/svg/tooltip_icon.svg'


const ActivitySection = () => {
    return (
        <div className = {styles.container}>
            <div className = {styles.modalSection}>
                <h2>Implementación</h2>
                <button><img src = {questionIcon} alt ='icon-question'/></button>
            </div>
            <div className = {styles.activitySection}>
                <h2>Actividades de restauración</h2>
                <div className = {styles.accordion}>

                </div>
            </div>

        </div>
    )
} 

export default ActivitySection
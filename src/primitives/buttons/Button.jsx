import React from "react"
import classNames from 'classnames'
import styles from './Button.module.scss'
import icon from '../../assets/icons/svg/service_icon.svg'

const Button = ({ className, children,variant = 'primary', variantSize, onClick, ...props  }) => {
    return (
        <button className = {classNames(styles.btn, {
                [styles.primary]: variant === 'primary',
                [styles.secondary] : variant === 'secondary',
                [styles.cardbtn]: variant === 'card-btn',
                [styles.tag]: variant === 'tag',
                [styles.small]: variantSize === 'small',
                [styles.medium]: variantSize === 'medium',
                [styles.large]: variantSize === 'large',
        })} onClick = {onClick}>{variant === 'tag' ? <img alt = "icon-btn" className = {styles.icon} src = {icon}/> : null }{children}</button>
    )
}
export default Button
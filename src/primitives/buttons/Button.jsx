import React from "react"
import classNames from 'classnames'
import styles from './Button.module.scss'


const Button = ({children,variant = 'primary', variantSize, onClick, ...props  }) => {
    return (
        <button className = {classNames(styles.btn, {
                [styles.primary]: variant === 'primary',
                [styles.secondary] : variant === 'secondary',
                [styles.cardbtn]: variant === 'card-btn',
                [styles.small]: variantSize === 'small',
                [styles.medium]: variantSize === 'medium',
                [styles.large]: variantSize === 'large',
        })} onClick = {onClick}>{children}</button>
    )
}
export default Button

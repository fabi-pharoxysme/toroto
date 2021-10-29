import React from "react"
import classNames from 'classnames'
import logo from '../../assets/icons/svg/logo.svg'
import link from '../../assets/icons/svg/external-link-white.svg'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className = {classNames(styles.container)}>
            <div>
                <img alt = "logo" className = {styles.logo} src = {logo}/>
            </div>
            <div className = {classNames(styles.links)}>
                <p>PROYECTOS</p>
                <p>SOBRE TOROTO</p>
                <p>BLOG</p>
                <p className = {styles.linkwithIcon}><img src = {link} alt = "link"/>META REGISTRO</p>
                <button className = {styles.btn}>CONTACTO</button>
            </div>
        </div>
    )
}
export default Navbar
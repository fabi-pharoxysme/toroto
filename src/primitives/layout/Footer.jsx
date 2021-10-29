import React from "react"
import classNames from 'classnames'
import styles from './Footer.module.scss'
import logo from '../../assets/icons/svg/logo.svg'
import fb from '../../assets/icons/svg/facebook_icon.svg'
import linkedin from '../../assets/icons/svg/linkedin_icon.svg'
import ig from '../../assets/icons/svg/instagram_icon.svg'
import twitter from '../../assets/icons/svg/twitter_icon.svg'


const Footer = () => {
    return (
        <div className = {classNames(styles.container)}> 
            <div className = {styles.socialMediaIcons}>
                <img src = {fb} alt = "fb-icon"/>
                <img src = {linkedin} alt = "linkedin-icon"/>
                <img src = {ig} alt = "ig-icon"/>
                <img src = {twitter} alt = "twitter-icon"/>
            </div>
            <div className = {styles.logoContainer}>
                <object data = {logo}  width = '177px' alt = "logo" className = {styles.logo}/>
            </div>
        </div>
    )
}

export default Footer
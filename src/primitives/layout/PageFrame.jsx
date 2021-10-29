import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from './PageFrame.module.scss'

const PageFrame = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className = {styles.pageContainer}>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default PageFrame
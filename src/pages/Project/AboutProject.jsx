import React from 'react'
import styles from './AboutProject.module.scss'
import Button from "../../primitives/buttons/Button"
import project1 from '../../assets/img/img_project_1.png'
import project2 from '../../assets/img/img_project_2.png'
import project3 from '../../assets/img/img_project_3.png'
import project4 from '../../assets/img/img_project_4.png'

const validation = (key) => {
    switch(key) {
        case  "P001":
            return <img className = {styles.img} alt = "img-project" key= {key} src = {project1}/>
        case "P002":
            return <img className = {styles.img} alt = "img-project" key= {key} src = {project2}/>
        case "P003":
            return <img className = {styles.img} alt = "img-project" key= {key} src = {project3}/>
        case "P004":
            return <img className = {styles.img}  alt = "img-project" key= {key} src = {project4}/>
            default:;
     }
}


const AboutProject = ({location, name, description, problem,id}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.wrapper}>
                <div className = {styles.description}>
                    <span>{location}</span>
                    <h2>{name}</h2>
                    <div className = {styles.tags}>
                        <Button variant = 'tag'>Restauración ecológica</Button>
                        <Button variant = 'tag'>Captura de carbono</Button>
                    </div>
                    <p>{description}</p>
                </div>
                <div className = {styles.imgContainer}>
                    {validation(id)}
                </div>
            </div>
            <div className = {styles.problemSection}>
                <h3>Problemática</h3>
                <p>{problem}</p>
            </div>
        </div>
    )
}

export default AboutProject
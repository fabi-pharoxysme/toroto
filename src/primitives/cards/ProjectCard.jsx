import * as React from "react"
import classNames from 'classnames'
import styles from './ProjectCard.module.scss'
import Button from '../buttons/Button'
import project1 from '../../assets/img/img_project_1.png'
import project2 from '../../assets/img/img_project_2.png'
import project3 from '../../assets/img/img_project_3.png'
import project4 from '../../assets/img/img_project_4.png'

const validation = (key) => {
    switch(key) {
        case  "P001":
            return <img className = {styles.imgContainer} alt = "img-project" key= {key} src = {project1}/>
        case "P002":
             return <img className = {styles.imgContainer} alt = "img-project" key= {key} src = {project2}/>
        case "P003":
             return <img className = {styles.imgContainer} alt = "img-project" key= {key} src = {project3}/>
        case "P004":
            return <img className = {styles.imgContainer}  alt = "img-project" key= {key} src = {project4}/>
            default:;
    }
  }

const ProjectCard = ({location, name, description, services, id,children }) => {
    

    return (
        <div className = {styles.container} key = {id}>
            <div className = {styles.imgContainer}>
                {validation(id)}
            </div>
            <div className = {styles.description}>
                <span>{location }</span>
                <h3>{name}</h3>
                <p>
                    {description}
                </p>
                <div className = {styles.tags}>
                    <div className = {classNames(styles.tagSection)}>
                        <Button variant= 'tag'>{services = 'Servicio x'}</Button>
                        <Button variant= 'tag'>{services}</Button>
                    </div>
                    <div className = {styles.lastBtn}>
                        <Button variant= 'card-btn'>ver proyecto completo</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
import React from 'react'
import styles from './AboutProject.module.scss'
import Button from "../../primitives/buttons/Button"
import project1 from '../../assets/img/img_project_1.png'
import project2 from '../../assets/img/img_project_2.png'
import project3 from '../../assets/img/img_project_3.png'
import project4 from '../../assets/img/img_project_4.png'

// const validation = (key) => {
//     switch(key) {
//         case  "P001":
//             return <img className = {styles.img} alt = "img-project" key= {key} src = {project1}/>
//         case "P002":
//              return <img className = {styles.img} alt = "img-project" key= {key} src = {project2}/>
//         case "P003":
//              return <img className = {styles.img} alt = "img-project" key= {key} src = {project3}/>
//         case "P004":
//             return <img className = {styles.img}  alt = "img-project" key= {key} src = {project4}/>
//             default:;
//     }
//   }


const AboutProject = ({location, name, description, problem,id}) => {
    return (
        <div className = {styles.container}>
            <div className = {styles.wrapper}>
                <div className = {styles.description}>
                    <span>{location = "Región donde se ubica, Estado."}</span>
                    <h2>{name = "Acá va el nombre del proyecto en dos o tres líneas como máximo."}</h2>
                    <div className = {styles.tags}>
                        <Button variant = 'tag'>Restauración ecológica</Button>
                        <Button variant = 'tag'>Captura de carbono</Button>
                    </div>
                    <p>{description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</p>
                </div>
                <div className = {styles.imgContainer}>
                    {/* {validation(id)} */}
                </div>
            </div>
            <div className = {styles.problemSection}>
                <h3>Problemática</h3>
                <p>{problem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
            </div>
        </div>
    )
}

export default AboutProject
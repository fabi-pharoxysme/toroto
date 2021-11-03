import React, {createContext, useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProjectContext = createContext()

const ProjectProvider = ({children}) => {
    const [dataProject, setDataProject] = useState([])
    const [activities, setActivities] = useState([])
    const [img, setImg] = useState([])
    const [location, setLocation ] =useState([])
    const [impact, setImpact] = useState([])
    const [longitude, setLongitude] = useState([])
    const [latitude, setLatitude] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://fieldops-api.toroto.mx/api/projects/${id}`)
            const projects = await data.json()
            setDataProject(projects.data[0])
            setActivities( await projects.data[0].activities)
            setImg( await projects.data[0].images)
            await setLocation(await projects.data[0].geometry.coordinates[0])
            await setLongitude(await projects.data[0].geometry.coordinates[0][0][0])
            await setLatitude(await projects.data[0].geometry.coordinates[0][0][1])
            setImpact(await projects.data[0].impact)
        }
        fetchData()
    }, [id])
    const data = { dataProject,activities,img,impact,location, longitude, latitude}
    return (
        <ProjectContext.Provider value = {data}>
            {children}
        </ProjectContext.Provider>
    )
}
export { ProjectProvider } 
export default ProjectContext
import React, {createContext, useState,useEffect} from 'react'

const MainContext = createContext()

const MainProvider = ({children}) => {
    const [dataProject, setDataProject] = useState([])
    const [location, setLocation] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://fieldops-api.toroto.mx/api/projects`)
            const projects = await data.json()
            setDataProject(projects.data)
            await setLocation(await projects.data.map(i=>i.geometry.coordinates[0][0]))
        }
        fetchData()
    }, [])
    const data = { dataProject,location}
    return (
        <MainContext.Provider value = {data}>
            {children}
        </MainContext.Provider>
    )
}
export { MainProvider } 
export default MainContext
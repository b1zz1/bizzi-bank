
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../components/layout/Loading'

import styles from "./Project.module.css"

const Project = () => {
    const {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                },
            }).then(answer => answer.json())
            .then((data) => {
                setProject(data)
            })
            .catch(error => console.log)
        }, 300)
    }, [id])

    console.log(id)
    
    return (
        <>
            {project.name ? (
                <p>{project.name}</p>
            ): (
                <Loading />
            )}
        </>
    )
}

export default Project
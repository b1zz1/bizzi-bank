
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Container from '../components/layout/Container'
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
    
    const toggleProjectForm = () => {
    
    }

    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        <div>
                            <h1>Projeto: {project.name}</h1>
                            <button>editar</button>
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Project
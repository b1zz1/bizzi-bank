import { useState, useEffect, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../components/layout/Container'
import LinkButton from '../components/layout/LinkButton'
import Message from '../components/layout/Message'
import ProjectCard from '../components/project/ProjectCard'

import Loading from '../components/project/Loading'
import styles from './Projects.module.css'

function Projects() {
    const [projects, setProjects] = useState([])
    
    const location = useLocation()
    let message = ''

    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((answer) => answer.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/NewProject" text="New project"/>
            </div>
            {message && <Message type="success" text={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <Suspense fallback={<Loading />}>
                            <ProjectCard
                                id={project.id}
                                name={project.name}
                                budget={project.budget}
                                category={project.category}
                                key={project.id}
                            />
                        </Suspense>
                    )
                )}
            </Container>
        </div>
    )
}

export default Projects
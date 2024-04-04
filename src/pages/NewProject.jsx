import { useNavigate } from 'react-router-dom'

import ProjectForm from '../components/project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
    const navigate = useNavigate()

    function createPost(project) {
        
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((answer) => answer.json())
        .then((data) => {
            // push user to the Projects page after new project has been submited
            navigate('/projects', {state: {message: 'Project succesfully created!'}})
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className={styles.newproject_container}>
            <div className={styles.newproject_align}>
                <h1>Create project</h1>
                <p>Create a new project to add tasks</p>
            </div>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}

export default NewProject
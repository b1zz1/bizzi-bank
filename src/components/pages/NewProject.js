// import {useHistory} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import style from './NewProject.module.css'

function NewProject() {

    // const history = useHistory()

    function createPost(project) {
        // initialize budget and services
        project.budget = 0
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
            console.log(data)
            //redirect
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className={style.newproject_container}>
            <h1>Create project</h1>
            <p>Create a new project to add tasks</p>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}

export default NewProject
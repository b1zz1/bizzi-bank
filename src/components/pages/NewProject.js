import ProjectForm from '../project/ProjectForm'
import style from './NewProject.module.css'

function NewProject() {
    return (
        <div className={style.newproject_container}>
            <h1>Create project</h1>
            <p>Create project to add services</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject
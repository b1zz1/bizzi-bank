import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'

import style from './ProjectForm.module.css'

function ProjectForm () {
    return (
        <form className={style.form}>
            <Input type="text" name="name" text="Project name" placeholder="My new project"/>
            <Input type="number" name="budget" text="Project budget" placeholder="$1000,00"/>
            <Select name="select" text="Select category"/>
            <Submit />
        </form>
    )
}

export default ProjectForm
import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import ClearForm from '../form/ClearForm'

import style from './ProjectForm.module.css'

function ProjectForm ({handleSubmit, projectData}) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((answer) => answer.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((error) => console.log(error))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={style.form}>
            <Input
                type="text"
                name="name"
                text="Project name"
                placeholder="My new project"
                handleOnChange={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type="number"
                name="budget"
                text="Project budget"
                placeholder="$1000,00"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select 
                name="select" 
                text="Select category" 
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : ''}
            />
            <div className={style.submit_area}>
                <ClearForm />
                <Submit text="Create project" />
            </div>
        </form>
    )
}

export default ProjectForm
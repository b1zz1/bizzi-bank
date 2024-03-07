import { useEffect, useState } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import ClearForm from '../form/ClearForm'

import style from './ProjectForm.module.css'

function ProjectForm () {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((answer) => answer.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <form className={style.form}>
            <Input type="text" name="name" text="Project name" placeholder="My new project"/>
            <Input type="number" name="budget" text="Project budget" placeholder="$1000,00"/>
            <Select name="select" text="Select category" options={categories}/>
            <div className={style.submit_area}>
                <ClearForm />
                <Submit text="Create project"/>
            </div>
        </form>
    )
}

export default ProjectForm
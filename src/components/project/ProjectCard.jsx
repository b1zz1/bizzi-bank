import { Link } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

import DeleteButton from '../layout/DeleteButton'

import placeholder from '../../assets/placeholder-img.svg'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
            <img src={placeholder} alt="placeholder"/>
            <p className={styles.category_text}>
                <span className={`${styles[category.name.toLowerCase()] || styles.default}`}>{category.name}</span>
            </p>
            <h4>{name}</h4>
            <p>
                <span>budget:</span> R${budget}
            </p>
            <div className={styles.project_card_actions}>
                <DeleteButton event={remove}/>
                <Link to={`/project/${id}`}>
                    <FaPen /> Edit
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
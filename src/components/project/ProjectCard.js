import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'


const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>budget:</span> R${budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default ProjectCard
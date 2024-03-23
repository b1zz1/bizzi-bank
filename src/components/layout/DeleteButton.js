import { FaTrash } from 'react-icons/fa'

import styles from './DeleteButton.module.css'

const deleteButton = ({ event }) => {
    return (
        <div className={styles.delete_button}>
            <button onClick={event} className={styles.btn}>
                <FaTrash />
            </button>
        </div>
    )
}

export default deleteButton
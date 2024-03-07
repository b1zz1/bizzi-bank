import {FaTrash} from 'react-icons/fa'
import styles from './ClearForm.module.css'

import Input from './Input'
import Select from './Select'

function ClearForm({event}) {

    return(

        <div className={styles.clear_form}>
            <button onClick={event} className={styles.btn}><FaTrash/></button>
        </div>
    )
}

export default ClearForm
import { NavLink } from 'react-router-dom'
import styles from './LinkButton.module.css'

function LinkButton({to, text}) {
    return(
        <NavLink className={styles.btn} to={to}>
            {text}
        </NavLink>
    )
}

export default LinkButton
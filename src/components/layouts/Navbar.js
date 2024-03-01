import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../images/bizzi-bank-logo-icon.svg'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <Container className={styles.logo_align}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="site logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Company">About our Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
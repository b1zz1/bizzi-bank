import {Link, NavLink} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../images/bizzi-bank-logo-icon.svg'

function Navbar() {
    return(
        <header>
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/">
                        <img className={styles.logo} src={logo} alt="Bizzi costs &copy;" />
                    </Link>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/Projects">Projects</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/Company">About Us</NavLink>
                        </li>
                        <li className={styles.item}>
                            <NavLink to="/Contact">Contact</NavLink>
                        </li>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar
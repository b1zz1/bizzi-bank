import{ FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/b1zz1/bluco-project"><FaGithub /></a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Bluco</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer
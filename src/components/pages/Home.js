import LinkButton from '../layout/LinkButton'

import styles from './Home.module.css'

import manage_alt from '../images/home-img.svg'

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Bluco</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton to="/NewProject" text="Create new project" />
            <img src={manage_alt} alt="" />
        </section>
    )
}

export default Home
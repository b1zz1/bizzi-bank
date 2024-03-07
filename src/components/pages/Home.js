import styles from './Home.module.css'
import LinkButton from '../layouts/LinkButton'
import manage_alt from '../images/managing_alt1.svg'

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Bluco</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton to="/NewProject" text="Create new project"/>
            <img src={manage_alt} alt="" />
         </section>
    )
}

export default Home
import { useLocation } from 'react-router-dom'

import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from '../layout/Message'

import styles from './Project.module.css'

function Projects() {
    const location = useLocation()

    let message = ''

    if(location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/NewProject" text="New project"/>
            </div>
            {message && <Message type="success" text={message} />}
            <Container customClass="start">
                <p>Active projects</p>
            </Container>
        </div>
    )
}

export default Projects
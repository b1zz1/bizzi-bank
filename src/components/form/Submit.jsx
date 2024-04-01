import styles from './Submit.module.css'

const Submit = ({ text }) => {
    return (
            <div className={styles.submit}>
                <button className={styles.btn}>{text}</button>
            </div>
    )
}

export default Submit
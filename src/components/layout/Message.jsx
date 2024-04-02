import { useState, useEffect } from 'react'

import styles from './Message.module.css'

const Message = ({ type, text, forceVisible }) => {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        // if there's no text, the Message component won't be active
        if(!text) {
            setVisible(false)
            return
        }

        setVisible(true)
        
        // makes the Message component vanish after 3 seconds
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [text])

    return (
        <>
            { visible && (
                <div className={`${styles.message} ${styles[type]}`}>{text}</div>
            )}
        </>
    )
}

export default Message
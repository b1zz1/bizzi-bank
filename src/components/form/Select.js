import styles from './Select.module.css'

const Select = ({ text, name, options, handleOnChange, value }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select className={styles.form_control_arrow} name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Select an option</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>{options.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
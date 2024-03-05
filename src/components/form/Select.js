import style from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}</label>
            <select className={style.form_control_arrow} name={name} id={name}>
                <option>Select option</option>
            </select>
        </div>
    )
}

export default Select
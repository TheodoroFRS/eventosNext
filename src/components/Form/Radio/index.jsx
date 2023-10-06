
import styles from "./styles.module.css"


export default function Radio({ id, name,value,checked,onChange}) {


    return (
        <>
            <div className={styles.radio} >
                <input id={id} name={name} type="radio" value={value} checked={checked} onChange={onChange}
                />
            </div>
        </>

    )
}

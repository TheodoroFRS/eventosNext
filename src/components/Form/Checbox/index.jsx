
import styles from "./styles.module.css"


export default function Checkbox({id,onChange}) {

  
    return (
        <>
            <input className={styles.checkbox} id={id}onChange={onChange} type="checkbox"   
            />

        </>

    )
}

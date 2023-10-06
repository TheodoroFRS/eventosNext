
import styles from "./styles.module.css"


// export default function Input({placeholder,id,tipo,value,onChange}) {
 export default function Input({...props}) {
  
    return (
        <>
            {/* <input className={styles.input} placeholder={placeholder}
            id={id}
            type={tipo}
            value={value}
            onChange={onChange}   
            /> */}

         <input className={styles.input} {...props}/>

        </>

    )
}

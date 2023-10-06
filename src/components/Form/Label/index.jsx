
import styles from "./styles.module.css"


export default function Label({htmlFor,children}) {


  return (
    <>
          <label className={styles.label} htmlFor={htmlFor}>{children}</label>
    </>

  )
}

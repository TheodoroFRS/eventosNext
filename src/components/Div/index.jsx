import styles from "./styles.module.css"


export default function Div({ children }) {


  return (
    <>
      <div className={styles.div}>
        {children}
      </div>

    </>

  )
}

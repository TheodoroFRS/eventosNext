import styles from "./styles.module.css"


export default function Botao({children, ...props}) {


  return (
    <>
        <button className={styles.botao} {...props} >{children}</button>
   
    </>

  )
}

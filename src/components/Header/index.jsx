import styles from "./styles.module.css"


export default function Header({texto}) {


  return (
    <>
        <header>
            <h1 className={styles.titulo}>
               {texto}
            </h1>
        </header>
    
    </>

  )
}

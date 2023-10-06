import styles from "./styles.module.css"


export default function Textarea({ onChange,children }) {


  return (
    <>
      <textarea className={styles.textarea} onChange={onChange}>
      {children}
      </textarea>
    </>

  )
}


import styles from "./styles.module.css"
import { useState } from 'react'

export default function Selection({id,onChange,children}) {

  
    return (
        <>
                <select className={styles.selection} onChange={onChange} id={id}>
             {children}
                </select>

        </>

    )
}

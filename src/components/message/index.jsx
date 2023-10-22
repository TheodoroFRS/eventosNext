import { useEffect, useState } from "react"

import styles from "./styles.module.css"


export default function Message({ Texto, tipo }) { //ativo,


  return (
    <>
      {tipo === "error" ? (

        <div className={styles.container}>
          <div className={styles.error}>
            <p>{Texto}</p>
          </div>
        </div>

      ) : (

        <div className={styles.container}>
          <div className={styles.success}>
            <p>{Texto}</p>
          </div>
        </div>

      )}

    </>
  )
}

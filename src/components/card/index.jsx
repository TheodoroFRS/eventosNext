import Link from "next/link"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export default function Card({ id, titulo, dataInicio, dataFim }) {

    // const [verso, setVerso] = useState(false);
    // const virar = () => {
    //     setVerso(!verso);
    //   };

    return (
        <>
            <div className={styles.card}>
                {/* <div className={styles.conteudo}> */}
            {/* <div className={`${verso ? styles.flipped : ''}`} onClick={virar}> */}
                    <Link href={`/eventos/${id}`} >

                        <div className={styles.frente}>
                            <h2 className={styles.cardTitulo}>{titulo}</h2>
                        </div>

                        <div className={styles.verso}>
                            <div>Data de início:{dataInicio}</div>
                            <div>Data de fim:{dataFim}</div>
                        </div>
                    </Link>
                {/* </div> */}
                {/* </div> */}
            </div>
        </>
    )

}
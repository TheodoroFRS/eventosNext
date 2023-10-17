import Link from "next/link"
import styles from "./styles.module.css"

export default function Evento({ id, titulo, dataInicio, dataFim, texto, ...props }) {

    return (
        <>
            <div className={styles.card  } {...props} >

                    <Link href={`/eventos/${id}`} >

                        <div className={styles.frente}>
                            <h2 className={styles.cardTitulo}>{titulo}</h2>
                        </div>

                        <div className={styles.verso}>
                            <div>Data de início:{dataInicio}</div>
                            <div>Data de fim:{dataFim}</div>
                        </div>
                    </Link>
    
                    <h4 className={styles.cardTitulo}>{texto}</h4>

            </div>
        </>
    )

}
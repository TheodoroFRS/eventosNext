import Link from "next/link"
import styles from "./styles.module.css"


export default function Card({ id, titulo, src, alt, dataInicio, dataFim, texto, ...props }) {

    return (
        <>
            <div className={styles.card} {...props} >
                <Link href={`/eventos/${id}`} >


                    <img className={styles.image} src={src} alt={alt} />


                    <h2 className={styles.cardTitulo}>{titulo}</h2>



                    <div className={styles.data}>
                        <div>Data de início: {dataInicio}</div>
                        <div>Data de fim: {dataFim}</div>
                    </div>
                </Link>

                <h4 className={styles.cardTitulo}>{texto}</h4>

            </div>
        </>
    )

}
import styles from "./styles.module.css"
export default function Card({titulo,dataInicio,dataFim}) {

    return(
        <>
        <Link href={'/enventos/${id}'}>

        <div className={styles.card}>
            <h2 className={styles.cardTitulo}>{titulo}</h2>
            <div>Data de início:{dataInicio}</div>
            <div>Data de fim:{dataFim}</div>
        </div>
        </Link>
        </>
    )

}
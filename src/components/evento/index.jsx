
import styles from "./styles.module.css"

export default function Evento({ titulo, src, alt, descricao, dataInicio, dataFim, local, ...props }) {

    return (
        <>
            <div className={styles.evento} {...props} >

                <img className={styles.image} src={src} alt={alt} />

                <h1 className={styles.eventoTitulo}>{titulo}</h1>

                <div>Data de início: {dataInicio}</div>
                <div>Data de fim: {dataFim}</div>

                <div>
                    Local
                    <h4 className={styles.eventoTitulo}> {local}</h4>
                </div>
                
                <div>
                    Descrição
                    <h2 className={styles.eventoTitulo}>{descricao}</h2>
                </div>
            </div >
        </>
    )

}
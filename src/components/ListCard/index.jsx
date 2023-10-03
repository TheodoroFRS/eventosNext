import { useEffect,useState} from "react";
import Card from "../card";
import styles from "./styles.module.css"
import axios from "axios";
export default function ListCard() {

const [eventos,setEventos] = useState([])

useEffect(()=>{
    axios.get('http://localhost:3000/eventos')
    .then(resultados => setEventos(resultados.data))
}, [])

function formatarData(data) {
    const[ano,mes,dia]=data.split('-');
    return `${dia}/${mes}/${ano} `
    
}


    return(
        <>
            <h1 className={styles.titulo}>Lista de Eventos</h1>
        <div className={styles.listcard}>
            {eventos.length == 0 &&
                <span>Nenhum estado encontrado!</span>
            }
            {eventos.length > 0 && 
            <>
            {eventos.map(document=>
            <Card 
            id={document.id}
        titulo={document.titulo}
        dataInicio={formatarData(document.dataInicio)}
        dataFim={formatarData(document.dataFim)}
        />
            )} 

            </>
}

        </div>
        </>
    )

}
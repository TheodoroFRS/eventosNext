import { useEffect, useState } from "react";
import Card from "../card";
import styles from "./styles.module.css"
import axios from "axios";
import { api } from "@/service/api";
import Message from "../Message";
import Container from "../Container";
import { formatarData } from "@/utils/mascaras";

export default function ListCard() {

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        api.get('/eventos')
            .then(resultados => setEventos(resultados.data))
    }, [])

    // function formatarData(data) {
    //     const [ano, mes, dia] = data.split('-');
    //     return `${dia}/${mes}/${ano} `
    // }


    return (
        <>
            {/* <h1 className={styles.titulo}>Lista de Eventos</h1> */}


            {eventos.length == 0 &&
                <Message
                    Texto="Nenhum evento encontrado!"
                    error
                />
            }


            <div className={styles.listcard}>

                {eventos.length > 0 &&
                    <>
                        {eventos.map(document =>
                            <Card
                                id={document.id}
                                titulo={document.titulo}
                                src={document.src}
                                alt={document.alt}
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
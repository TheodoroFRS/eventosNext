import { useEffect, useState } from "react";
import Card from "../card";
import styles from "./styles.module.css"
import axios from "axios";
import { api } from "@/service/api";
import Message from "@/components/message";
import Container from "../Container";
import { formatarData } from "@/utils/mascaras";
import { useRouter } from "next/router";

export default function ListCard() {

    const [eventos, setEventos] = useState([])


    //  Estado para abrir e fechar o o message
    const [message, setMessage] = useState(false);

    const router = useRouter()

    async function getEventos() {
        try {
            const res = await api.get(`/eventos`)
            setEventos(res.data)
            // .then(resultados => setEventos(resultados.data))
            setMessage(false)

        } catch (error) {
            if (error.response.status === 404) {
                setMessage(true)
            }
            console.log(error);
        }
    }


    useEffect(() => {
        getEventos();
    }, [router]);

    // function formatarData(data) {
    //     const [ano, mes, dia] = data.split('-');
    //     return `${dia}/${mes}/${ano} `
    // }


    return (
        <>
            {/* <h1 className={styles.titulo}>Lista de Eventos</h1> */}


            {/* {eventos.length == 0 &&
                <Message
                    Texto="Nenhum evento encontrado!"
                    error
                />
            } */}
            
                <Message
                    Texto="Nenhum evento encontrado!"
                    ativo={message}
                    error
                />

            <div className={styles.listcard}>
{/* 
                {eventos.length > 0 && */}
                    <>
                        {eventos.map(document =>
                            <Card
                                key={document.id}
                                id={document.id}
                                titulo={document.titulo}
                                src={document.src}
                                alt={document.alt}
                                dataInicio={formatarData(document.dataInicio)}
                                dataFim={formatarData(document.dataFim)}
                            />
                        )}

                    </>
                {/* } */}

            </div>
        </>
    )

}
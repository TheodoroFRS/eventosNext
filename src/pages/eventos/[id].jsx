import Header from "@/components/Header";
import Evento from "@/components/evento";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"


export default function EventosHome() {

    const [evento, setEvento] = useState({})

    const router = useRouter()

    useEffect(() => {
        const id = router.query.id
        if (id) {
            axios.get(`http://localhost:3001/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
        else{
            console.log('erro evento não encontrado');
        }
    }, [router])

    return (
        <>
            <Header texto={"Detalhe do evento"} />

            <Evento
                titulo={evento.titulo}
                texto={evento.descricao}
                dataInicio={evento.dataInicio}
                dataFim={evento.dataFim}
            />

        </>
    )

}
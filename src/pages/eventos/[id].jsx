import Header from "@/components/Header";
import Card from "@/components/card";
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
    }, [router])

    return (
        <>
            <Header texto={"Detalhe do evento"} />
            <Card style={{border:"1px solid rgba(0, 0, 0, 0)", hover:"none"}}
                titulo={evento.titulo}
                texto={evento.descricao}
                dataInicio={evento.dataInicio}
                dataFim={evento.dataFim}
            />
        </>
    )

}
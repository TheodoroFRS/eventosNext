import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"

export default function EventosHome() {

const [evento, setEvento] = useState({})

const router = useRouter()

useEffect(()=>{
    const id = router.query.id
    if(id){
    axios.get(`http://localhost:3000/eventos/${id}`)
    .then(resultado => setEvento(resultado.data))
}
},[router])

    return(
        <>
            <h1>Detalhe do evento</h1>
            <h2>{evento.titulo}</h2>
            <p>{evento.descricao}</p>
        </>
    )
    
}
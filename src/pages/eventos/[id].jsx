import Header from "@/components/Header";
import Evento from "@/components/evento";
import Message from "@/components/Message";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { api } from "@/service/api";
import Botao from "@/components/Form/Botao";
import Container from "@/components/Container";
import Link from "next/link";


//npm install -g json-server
//npx json-server --watch database.json --port 3001

export default function EventosHome() {

    const [evento, setEvento] = useState({})

    //  Estado para abrir e fechar o o message
    const [message, setMessage] = useState(false);

    const router = useRouter()

    const id = router.query.id

    //as vezes falha

    async function getEventos() {
        try {
            const res = await api.get(`/eventos/${id}`)
                .then(resultado => setEvento(resultado.data));
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

    // teste que deram errado
    <>{/* 
      // async function getEventos() {
        
    //     try {
    //         axios.get(`http://localhost:3001/eventos/${id}`)
    //         .then(resultado => setEvento(resultado.data))

    //     } catch (error) {
    //         if (error.response.status === 404) {
    //             console.log(error);
    //             console.log("Nenhum evento encontrado !");
    //           }

    //        console.log(error);
    //         // console.log('erro evento não encontrado');
    //         // setMessage(true)
    //         // console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getEventos()
    // }, [router]);

    //const id = router.query.id


    // async function getProdutos() {
    //     try {
    //         api.get(`/eventos/${id}`).then(resultado => setEvento(resultado.data));
    //     } catch (error) {
    //         //   if (error.response.status === 404) {
    //         //     console.log(error);
    //         //     setMessage(true)
    //         //   }
    //         setMessage(true)
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getProdutos();
    // }, [router]);



    // esse funcionma Maio ou menos 

    // const id = router.query.id
    // useEffect(() => {
    //     if (id) {
    //         console.log('evento encontrado');
    //         api.get(`http://localhost:3001/eventos/${id}`)
    //             .then(resultado => setEvento(resultado.data));
    //     }
    //     else {
    //         console.log('erro evento não encontrado');
    //     }
    // }, [router]) */}

    </>



    return (
        <>
            <Header titulo={"Detalhe do evento"} navbarBotao1={"Eventos"} navbarBotao1Link={"/"} navbarBotao2={"Cadastrar evento"} navbarBotao2Link={"/CadastrarEvento"} />
            {message == true ? (
                <>
                    <Message
                        Texto="evento não encontrado"
                        tipo="error"
                    />
                    <Evento
                        titulo={evento.titulo}
                        src={"../img/enfim poderei descansar.jpg"}
                        alt={evento.alt}
                        descricao={evento.descricao}
                        dataInicio={evento.dataInicio}
                        dataFim={evento.dataFim}
                        local={evento.local}

                    />
                </>

            ) : (

                <>

                    <Message
                        Texto="evento encontrado"
                        tipo="success"
                    />

                    <Evento
                        titulo={evento.titulo}
                        src={evento.src}
                        alt={evento.alt}
                        descricao={evento.descricao}
                        dataInicio={evento.dataInicio}
                        dataFim={evento.dataFim}
                        local={evento.local}
                    />
                </>

            )}
            <Container >
            <Link href={`/AtualizarEvento/${evento?.id}`}>
            <Botao>
                Editar
            </Botao>
            </Link>
            </Container>


        </>
    )

}
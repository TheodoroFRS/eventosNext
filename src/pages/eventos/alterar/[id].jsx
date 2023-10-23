import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { useEffect, useState } from "react"
import Container from '@/components/Container'
import Label from '@/components/Form/Label'
import Input from '@/components/Form/Input'
import Div from '@/components/Div'
import Radio from '@/components/Form/Radio'
import Option from '@/components/Form/Option'
import Selection from '@/components/Form/Selection'
import Botao from '@/components/Form/Botao'
import Textarea from '@/components/Form/Textarea'
import Checkbox from '@/components/Form/Checbox'
import { api } from "@/service/api";
import Message from '@/components/Message'

import { useRouter } from "next/router";
import Evento from '@/components/evento'




const inter = Inter({ subsets: ['latin'] })



export default function AtualizarEvento() {
    const [evento, setEvento] = useState({})

    //  Estado para abrir e fechar o o message de não encontrado
    const [message, setMessage] = useState(false);

    //  Estado para mostar a message de success ou error
    const [atulizado, setAtulizado] = useState(false);

     //  Estado para mostar a message de success ou error
     const [deletado, setDeletado] = useState(false);

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

    async function atualizar() {
        try {
            const resposta = await api.patch(`/eventos/${evento?.id}`, {
                titulo: evento.titulo,
                descricao: evento.descricao,
                dataInicio: evento.dataInicio,
                dataFim: evento.dataFim,
                local: evento.local,
            });
            setAtulizado(true)
            window.location.href = `/eventos/${evento?.id}`;
        } catch (error) {
            console.log(error);
            console.log(`Deu ruim`);
            alert("Deu ruim")
            setAtulizado(false)
        }
    }

    async function deletar() {
        try {
             const resposta = await api.delete(`/eventos/${evento?.id}`);
            setDeletado(true)
            window.location.href = `/`;
        } catch (error) {
            console.log(error);
            console.log(`Deu ruim`);
            alert("Deu ruim")
            setDeletado(false)
        }
    }
   

    return (
        <>
            <Head>
                <title>Atualizar evento</title>
            </Head>

            <Header titulo={"Atualizar evento"} navbarBotao1={"Eventos"} navbarBotao1Link={"/"} navbarBotao2={"Cadastrar evento"} navbarBotao2Link={"/CadastrarEvento"} />
            <main>
                {message == true ? (
                    <>
                        <Message
                            Texto="evento não encontrado"
                            tipo="error"
                        />
                    </>

                ) : (

                    <>

                        {/* <Message
                        Texto="evento encontrado"
                        tipo="success"
                    /> */}
                    </>

                )}

                {atulizado == true ? (
                    <>
                        <Message
                            Texto="atualizado com sucesso"
                            tipo="success"
                        />

                    </>

                ) : (

                    <>

                        <Message
                            Texto="Atualização não realizada"
                            tipo="error"
                        />

                    </>

                )}

                {deletado == true ? (
                    <>
                        <Message
                            Texto="deletado com sucesso"
                            tipo="success"
                        />

                    </>

                ) : (

                    <>

                        <Message
                            Texto="erro ao deletar"
                            tipo="error"
                        />

                    </>

                )}



                <Container >
                    {/* <Form> */}
                    <form className={styles.formulario} onSubmit={e => atualizar(e)}>
                        <div className={styles.container} >

                            <div className={styles.sub_container} >
                                <Label htmlFor={"titulo"} tipo={evento.titulo}>Titulo:</Label>
                                <input
                                    tipo="text"
                                    id="titulo"
                                    value={evento.titulo}
                                    onChange={e => setEvento({ ...evento, titulo: e.target.value })}
                                />
                            </div>

                            <div className={styles.sub_container} >
                                <Label htmlFor="descricao" tipo={evento.descricao}>Descricao:</Label>
                                <textarea id="descricao" rows="4" cols="50" placeholder="Digite seu texto aqui"
                                    value={evento.descricao} onChange={e => setEvento({ ...evento, descricao: e.target.value })}></textarea>
                                {/* <Textarea id="descricao" rows="4" cols="50" placeholder="Digite seu texto aqui"
                  value={evento.descricao} onChange={e => setEvento({ ...evento, descricao: e.target.value })}>

                </Textarea> */}
                            </div>



                            <div className={styles.sub_container} >
                                <Label htmlFor={"dataInicio"} tipo={evento.dataFim}>Data de Inicio:</Label>
                                <input type='date' id="dataInicio" value={evento.dataInicio} onChange={e => setEvento({ ...evento, dataInicio: e.target.value })}></input>
                            </div>

                            <div className={styles.sub_container} >
                                <Label htmlFor={"dataFim"} tipo={evento.dataFim}>Data de Fim:</Label>
                                <input type='date' id="dataFim" value={evento.dataFim} onChange={e => setEvento({ ...evento, dataFim: e.target.value })}></input>
                            </div>

                            <div className={styles.sub_container} >
                                <Label htmlFor={"local"} tipo={evento.local}>Local:</Label>
                                <input
                                    tipo="text"
                                    id="local"
                                    value={evento.local}
                                    onChange={e => setEvento({ ...evento, local: e.target.value })}
                                />
                            </div>

                            <Container >
                                <Botao type="submit">Editar</Botao>
                            </Container>


                        </div>
                    </form>

                    <Container >
                        <Botao onClick={() => {deletar()}} style={{ backgroundColor: "red" }}>Excluir</Botao>
                    </Container>

                    <p>Titulo:{evento.titulo}</p>
                    <p>Descrição:{evento.descricao}</p>
                    <p>Data de Inicio:{evento.dataInicio}</p>
                    <p>Data de Fim:{evento.dataFim}</p>
                    <p>Local:{evento.local}</p>



                </Container>

                <Container >

                </Container>
            </main>
        </>
    )
}

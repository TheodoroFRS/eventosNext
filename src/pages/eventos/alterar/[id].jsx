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
import Message from "@/components/message";

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
            setEvento(res.data)
                // .then(resultado => setEvento(resultado.data));
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

    async function atualizar(e) {
        e.preventDefault()
        try {
            const resposta = await api.patch(`/eventos/${evento?.id}`, {
                titulo: evento.titulo,
                descricao: evento.descricao,
                dataInicio: evento.dataInicio,
                dataFim: evento.dataFim,
                local: evento.local,
                src: evento.src,
                alt: evento.alt,
            });
            setAtulizado(true)
            
            setTimeout(() => {
                router.push(`http://localhost:3000/eventos/${evento?.id}`)     
              }, 1000);   

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
            setTimeout(() => {
              router.push(`/`)
            }, 2000);
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

            <Header titulo={"Atualizar evento"} />
            <main>
                <Message
                    Texto="evento não encontrado"
                    ativo={message}
                    error
                />

                <Message
                    Texto="Atualização realizada com sucesso"
                    ativo={atulizado}
                    success
                />


                <Message
                    Texto="deletado com sucesso"
                    ativo={deletado}
                    success
                />


                {/* {message == true ? (
                    <>
                        <Message
                            Texto="evento não encontrado"
                            error
                        />
                    </>

                ) : (

                    <>


                    </>

                )}
                */}

                {/* {atulizado == true ? (
                    <>
                        <Message
                            Texto="atualizado com sucesso"
                            success
                        />

                    </>

                ) : (

                    <>

                        <Message
                            Texto="Atualização não realizada"
                            error
                        />

                    </>

                )} */}

                {/* {deletado == true ? (
                    <>
                        <Message
                            Texto="deletado com sucesso"
                            success
                        />

                    </>

                ) : (

                    <>

                        <Message
                            Texto="erro ao deletar"
                            error
                        />

                    </>

                )} */}



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

                            <div className={styles.sub_container} >
                                <Label htmlFor={"image"} tipo={evento.src}>Image:</Label>
                                <input
                                    tipo="text"
                                    id="image"
                                    value={evento.src}
                                    onChange={e => setEvento({ ...evento, src: e.target.value })}
                                />
                            </div>

                            <div className={styles.sub_container} >
                                <Label htmlFor={"alt"} tipo={evento.src}>descrição da imagem:</Label>
                                <input
                                    tipo="text"
                                    id="alt"
                                    value={evento.alt}
                                    onChange={e => setEvento({ ...evento, alt: e.target.value })}
                                />
                            </div>

                            <Container >
                                <Botao type="submit">Editar</Botao>
                            </Container>


                        </div>
                    </form>

                    <Container >
                        <Botao onClick={() => { deletar() }} style={{ backgroundColor: "red" }}>Excluir</Botao>
                    </Container>

                    {/* <p>Titulo:{evento.titulo}</p>
                    <p>Descrição:{evento.descricao}</p>
                    <p>Data de Inicio:{evento.dataInicio}</p>
                    <p>Data de Fim:{evento.dataFim}</p>
                    <p>Local:{evento.local}</p> */}



                </Container>

                <Container >

                </Container>
            </main>
        </>
    )
}

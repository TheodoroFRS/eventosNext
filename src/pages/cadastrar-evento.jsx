import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import { useState } from 'react'
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
import axios from 'axios'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [evento, setEvento] = useState({
    titulo: "",
    descricao: "",
    dataInicio: "",
    dataFim: "",
    local: ""
  });

  function inserirEvento(e) {
    try {
      // e.preventDefault()
      console.log(`Titulo: ${evento.titulo}`);
      console.log(`descrição: ${evento.descricao}`);
      console.log(`Data de Inicio: ${evento.dataInicio}`);
      console.log(`Data de Fim: ${evento.dataFim}`);
      console.log(`Local: ${evento.local}`);

      axios.post('http://localhost:3001/eventos', evento)
        .then(resultado => console.log(resultado.data))
        .catch(erro => console.log(erro))
      alert("Cadastro realizado com sucesso")

      setEvento({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: ""
      })

    } catch (error) {
      console.log(`Deu ruim`);
      alert("Deu ruim")
    }


  }

  return (
    <>
      <Head>
        <title>Eventos</title>
      </Head>

      <main>

        <Header titulo={"Inscrição"} navbarBotao1={"Eventos"}  navbarBotao1Link={"/"}  navbarBotao2={"Cadastrar evento"} navbarBotao2Link={"/cadastrar-evento"}/>


        <Container >
          {/* <Form> */}
          <form className={styles.formulario} onSubmit={e => inserirEvento(e)}>
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

              <Botao type="submit">Realizar inscrição</Botao>



            </div>
          </form>

          <p>Titulo:{evento.titulo}</p>
          <p>Descrição:{evento.descricao}</p>
          <p>Data de Inicio:{evento.dataInicio}</p>
          <p>Data de Fim:{evento.dataFim}</p>
          <p>Local:{evento.local}</p>

        </Container>

      </main>
    </>
  )
}
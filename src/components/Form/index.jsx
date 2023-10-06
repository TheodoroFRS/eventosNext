import styles from "./styles.module.css"
import { useState } from 'react'

export default function Form() {



  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const [curso, setCurso] = useState("");
  const [atendimento, setAtendimento] = useState("");
  const [termos, setTermos] = useState("");

function enviar(e) {
    e.preventDefault()
    console.log(`Nome: ${nome}`);
    console.log(`E-mail: ${email}`);
    console.log(`Sexo: ${sexo}`);
    console.log(`Curso: ${curso}`);
    console.log(`Atendimento: ${atendimento}`);
    console.log(`Termos: ${termos}`);



}

  return (
    <>
      <form  className={styles.formulario}onSubmit={e => enviar(e)}>
         {/* <div>
          <label htmlFor="nome">Nome</label>
          <input 
          type="text" 
          id="nome" 
          value={nome}
          onChange={e => setNome(e.target.value)}
           />
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input 
          type="email" 
          id="email" 
          value={email}
          onChange={e => setEmail(e.target.value)} />
        </div>

        <p>{nome} esse é seu e-mail: {email}</p> 

        <input className={styles.botao} type="submit" value="Enviar" /> 
       */}
      </form>
    
    </>

  )
}

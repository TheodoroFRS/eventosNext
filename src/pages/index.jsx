import Container from "@/components/Container";
import Header from "@/components/Header";
import ListCard from "@/components/ListCard";
import Link from "next/link"
import styles from '@/styles/Home.module.css'


export default function EventoPage() {

    return (
        <>
            <Header titulo={"Lista de Eventos"} navbarBotao1={"Eventos"}  navbarBotao1Link={"/"}  navbarBotao2={"Cadastrar evento"} navbarBotao2Link={"/cadastrar-evento"}/>
          
            <Container>
                <ListCard />
            </Container>
        </>
    )
}
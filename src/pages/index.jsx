import Container from "@/components/Container";
import Header from "@/components/Header";
import ListCard from "@/components/ListCard";
import Link from "next/link"
import styles from '@/styles/Home.module.css'


export default function Home() {

    return (
        <>
            <Header titulo={"Lista de Eventos"}/>
          
            <Container>
                <ListCard />
            </Container>
        </>
    )
}
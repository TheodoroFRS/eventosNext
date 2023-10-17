import Container from "@/components/Container";
import Header from "@/components/Header";
import ListCard from "@/components/ListCard";


export default function EventoPage() {

    return (
        <>
            <Header texto={"Lista de Eventos"} />
            <Container>
                <ListCard />
            </Container>
        </>
    )
}


import { Container } from "./styles";

interface SummaryItemProps{
    img: string;
    title: string;
    total: number;
    typeContainer?: string;
}

export function SummaryItem({img, title, total, typeContainer} : SummaryItemProps){
    return(
        <Container className={ typeContainer && typeContainer}>
            <header>
                <p>{title}</p>
                <img src={img} alt="Entradas" />
            </header>
            <strong>
                {
                    new Intl.NumberFormat('pt-BR', {
                        style:'currency',
                        currency:'BRL'
                    }).format( total)
                }
            </strong>
        </Container>
    );
}
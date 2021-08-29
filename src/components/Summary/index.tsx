import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";
import { SummaryItem } from "../SummaryItem";

export function Summary(){
    return (
        <Container>
            <SummaryItem img={incomeImg}
                         title="Entradas"
                         total={1000.00}/>

            <SummaryItem img={outcomeImg}
                         title="Saídas"
                         total={-500.00}/>

            <SummaryItem typeContainer="highlight-background" img={totalImg}
                         title="Total"
                         total={500.00}/>
        </Container>
    );
}

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

import { SummaryItem } from "../SummaryItem";
import { useTransaction } from '../../hooks/TransactionsContext';

export function Summary(){

    const { transactions } = useTransaction();

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit'){
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraw += transaction.amount;
            acc.total -= transaction.amount
        }

        return acc;
    },{
        deposit:0,
        withdraw:0,
        total:0
    })

    return (
        <Container>
            <SummaryItem img={incomeImg}
                         title="Entradas"
                         total={summary.deposit}/>

            <SummaryItem img={outcomeImg}
                         title="Saídas"
                         total={-summary.withdraw}/>

            <SummaryItem typeContainer="highlight-background" img={totalImg}
                         title="Total"
                         total={summary.total}/>
        </Container>
    );
}
import { useTransaction } from "../../hooks/TransactionsContext";

import { Container } from "./styles";


export function TransactionTable(){

    const { transactions } = useTransaction();

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>     
                    </tr>
                </thead>
                <tbody>
                {
                   transactions && transactions.map(( transaction ) => {
                        return (
                                <tr key={transaction._id}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type} >
                                        {new Intl.NumberFormat('pt-BR', {
                                            style:'currency',
                                            currency:'BRL'
                                        }).format(
                                            transaction.type === 'deposit'
                                            ? transaction.amount
                                            : (-transaction.amount) 
                                            )}
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                                    </td>
                                </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </Container>
    )
}
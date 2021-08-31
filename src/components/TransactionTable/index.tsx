import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";


interface Transaction{
    id:number,
    title: string;
    type:string;
    amount: number;
    category:string;
    createdAt: string;
}

export function TransactionTable(){

    useEffect( () => {
        api('/transactions')
             .then(response => setTransactions(response.data.transactions))
    }, []);

    const [transactions, setTransactions] = useState([]);

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
                   transactions.map(( transaction : Transaction) => {
                        return (
                                <tr key={transaction.id}>
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
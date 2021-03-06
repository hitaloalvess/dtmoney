import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction{
    _id:number,
    title: string;
    type:string;
    amount: number;
    category:string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, '_id' | 'createdAt'>

interface TransactionProviderProps{
    children: ReactNode;
}

interface TransactionContextData {
    transactions: Transaction[];
    createTransaction: (transaction : TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionsProvider({children} : TransactionProviderProps){

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    useEffect( () => {
        api('/transactions')
             .then(response => {
                setTransactions(response.data)
             })
    }, []);

    async function createTransaction(transactionInput : TransactionInput){
        const resp = await api.post('/transactions',transactionInput);

        setTransactions([
            ...transactions,
            resp.data.transaction
        ])
    }
    

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction(){
    const context = useContext(TransactionsContext);

    return context;
}
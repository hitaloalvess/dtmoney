import { FormEvent, useState } from 'react';
import Modal from 'react-modal';


import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useTransaction } from '../../hooks/TransactionsContext';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal( { isOpen, onRequestClose} : NewTransactionModalProps){

    const { createTransaction } = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');

    async function handleFormSubmit(event : FormEvent){
        event.preventDefault();

        await createTransaction({
            title, 
            amount,
            type,
            category
        })

        setTitle('');
        setAmount(0);
        setType('deposit');
        setCategory('');
        onRequestClose();
    }

    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

        <button 
            className="react-modal-close"
            onClick={onRequestClose}
            >
            <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleFormSubmit}>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number" 
                placeholder="Valor"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}    
            />

            <TransactionTypeContainer>
                <RadioBox 
                    type="button"
                    onClick={ () => setType('deposit')}
                    isActive={ type === 'deposit'}
                    activeColor="green"
                >
                    <img src={incomeImg} alt="Botão de tipo entrada" />
                    <span>
                        Entrada
                    </span>
                </RadioBox>

                <RadioBox
                    type="button"
                    onClick={ () => setType('withdraw')}
                    isActive={ type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outcomeImg} alt="Botão de tipo saída" />
                    <span>
                        Saída
                    </span>
                </RadioBox>
                
            </TransactionTypeContainer>

            <input 
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
        
      </Modal>
    );
}
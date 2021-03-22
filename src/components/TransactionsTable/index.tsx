import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function TransactionTable() {
    const { transactions } = useTransactions();
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-BR', { //TALVEZ SEJA INTERESSANTE COLOCAR ESSA FORMATAÇÃO DENTRO DO USE-EFFECT
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format( //TALVEZ SEJA INTERESSANTE COLOCAR ESSA FORMATAÇÃO DENTRO DO USE-EFFECT
                                    new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}

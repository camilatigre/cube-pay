
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ChargesTable = (props) => {
    const {table, isLoading} = props;

    const handleContent = () => {
        if(isLoading) {
            return 'Carregando...'
        }

        if(!table || !table.items || table.items?.length === 0){
            return 'Não temos itens o suficiente para exibir'
        }

        if(table && table.items.length > 0){
            return (<div className='charges-table'>
                <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Moeda</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Descrição</TableCell>
                            <TableCell>Criada em</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {table.items.map((row, index) => (
                            <TableRow
                            key={index}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.amount}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.currency}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    <div className={row.status === 'paid' ? 'cell-default cell-green' : 'cell-default'}>
                                        {row.status}
                                    </div>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.meta?.description ? row.meta?.description : '-'}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.createdAt}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>);
        }
    }
    return <>
        
        {handleContent()}
    </>
}

export default ChargesTable
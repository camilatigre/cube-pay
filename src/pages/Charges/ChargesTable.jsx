
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const ChargesTable = (table) => {

    const handleContent = () => {
        if(table && table.items){
            return (

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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                    <TableCell component="th" scope="row">
                        {row.status}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.meta?.description}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.createdAt}
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
            )
        }
    }
    return <>
        
        {handleContent()}
    </>
}

export default ChargesTable
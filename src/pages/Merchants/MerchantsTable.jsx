import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';
const MerchantsTable = (data) => {
    const navigate = useNavigate();

    const handleRowClick = (row) => {
        navigate('/dashboard', { state: { key: row.id } })
    }


    return <TableContainer component={Paper} >
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Document</TableCell>
                <TableCell>Document</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row, index) => (
                <TableRow
                
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >   
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.type}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.document}
                    </TableCell>
                    <TableCell component="th" scope="row">
                        <div onClick={() => handleRowClick(row)}>
                            {'testEnv'}
                        </div>
                        <div onClick={() => handleRowClick(row)}>
                            {'liveEnv'}
                        </div>
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default MerchantsTable;
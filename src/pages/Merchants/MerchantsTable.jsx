import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import {
Button,
} from '@mui/material';
import { useDispatch} from 'react-redux';
import { saveEnvSelectedId } from '../../slicers/Dashboard/slicer'; 
const MerchantsTable = (data) => {
    const listOfMerchants = data.data
    const dispatch = useDispatch();

    const navigate = useNavigate()
    const handleRowClick = (envId) => {
        navigate(`/dashboard`)

        dispatch(saveEnvSelectedId(envId))
    }


    return <TableContainer component={Paper} >
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Env Test</TableCell>
                <TableCell>Env Live</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {listOfMerchants.length > 0 &&  listOfMerchants.map((row, index) => (
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
                    <TableCell component="th" scope="row" className='pointer'>
                        <Button onClick={() => handleRowClick(row.testEnv.id)}>

                            {'Test'}
                        </Button>
                        
                    </TableCell>
                    <TableCell>

                        <Button disabled={!row.liveEnv} onClick={() => handleRowClick(row.liveEnv.id)}>

                            {'Live'}
                        </Button>
                    </TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default MerchantsTable;
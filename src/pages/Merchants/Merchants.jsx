import TopBar from "../commons/TopBar/TopBar";
import Grid from '@mui/material/Grid';
import ContentPage from "../commons/ContentPage/ContentPage"
import PermissionWrapper from "../commons/PermissionWrapper/PermissionWrapper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useSelector, useDispatch} from 'react-redux'

import './styles.css'
// import { useEffect } from "react";
const MerchantsPage = () => {
    // const dispatch = useDispatch();
    // const merchants = useSelector(state => state.merchants.data);
    // const isLoading = useSelector(state => state.merchants.isLoading);

    const createData = (name) => {
        return { name };
    }

    const rows = [
        createData('Merchant 1'),
        createData('Merchant 1'),
    ];


    return (
        <PermissionWrapper hasPermission={true}>
            <ContentPage>
                <TopBar />
                    <Grid container spacing={2} className="merchants">
                        <Grid item xs={9}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
            </ContentPage>
        </PermissionWrapper>
    )
}

export default MerchantsPage;
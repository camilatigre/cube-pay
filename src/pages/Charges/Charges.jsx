import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from 'react'
import './styles.css'


const chargesMock = {
  "total": 0,
  "count": 0,
  "previousPage": {
    "after": "FjApkGWQbNdRW14LG",
    "take": 20,
    "href": "/_private/environments/env_0PR863Q0An5WvF0cg/charges?take=20&after=FjApkGWQbNdRW14LG"
  },
  "nextPage": {
    "after": "FjApkGWQbNdRW14LG",
    "take": 20,
    "href": "/_private/environments/env_0PR863Q0An5WvF0cg/charges?take=20&after=FjApkGWQbNdRW14LG"
  },
  "items": [
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    }
  ]
};

const Charges = () => {
    const [table, setTableValue] = useState(chargesMock.items)
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                <div className="charges">
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
                            {table.map((row, index) => (
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
                     
                    </div>
            </Grid>
        </>
    )
}

export default Charges;
import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import './styles.css'
import { getTransactionsApi} from '../../api/api'
import { Typography } from "@mui/material";
import ContentPage from '../commons/ContentPage/ContentPage'
import { useParams } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const mock = {
  "total": 0,
  "count": 0,
  "previousPage": {
    "limit": 10,
    "offset": 0,
    "filters": {},
    "href": "/_private/environments/:env_id/charges?limit=10&offset=0"
  },
  "nextPage": {
    "limit": 10,
    "offset": 0,
    "filters": {},
    "href": "/_private/environments/:env_id/charges?limit=10&offset=0"
  },
  "items": [
    {
      "id": "wt_FceQQYAJPUQ1PUcyt",
      "tags": [
        "payment_received"
      ],
      "amount": 0,
      "fees": [
        {
          "type": "payment_processing_fee",
          "amount": 0
        }
      ],
      "totalFees": 0,
      "net": 0,
      "timestamp": "2024-02-29T13:00:01.123456Z"
    }
  ]
}
const TransactionsByWallet = () => {
    const [table, setTableValues] = useState(mock)
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const location = useParams()


    console.log(table)

    useEffect(() =>  {
        const accessToken = JSON.parse(sessionStorage.getItem('auth')).accessToken;
        
        const getTransactionsByWallet = async () => {
            try {
                setIsLoading(true);
                const response = await getTransactionsApi(location.walletId, accessToken );

                if (response.status === 200) {
                    const result = await response.json();
                    // setTableValues(result);
                    console.log(result)
                } else {
                    setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
                }
            } catch (error) {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            } finally {
                setIsLoading(false); 
            }
        };


        getTransactionsByWallet();


    }, []);
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                
                <ContentPage className="content-page">
                  {table.items && <>
                    <Typography variant="h2">{`Transações > Wallet: BRL`}</Typography>
                  <TableContainer component={Paper} >
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Valor</TableCell>
                            <TableCell>Total Taxas</TableCell>
                            <TableCell>Tipo</TableCell>
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
                                    {row.fees[0].amount}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.tags[0]}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.timestamp}
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                  
                  </>}

                </ContentPage>
            </Grid>
        </>
    )
}

export default TransactionsByWallet;
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
import { getMerchantsApi } from '../../api/api'; 
import './styles.css'
import { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const MerchantsPage = () => {
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([
        {
            id: 'm_EZhxvcFaEB0hVxs08',
            name: 'ACME Inc.',
            type: 'business',
            document: '0000022221'
        },
        {
            id: 'm_EZhxvcFaEB0hVxs07',
            name: 'Arcor',
            type: 'personal',
            document: '0000022221'
        }
    ]);
    const navigate = useNavigate();

    useEffect(() =>  {
        const userInfo = JSON.parse(sessionStorage.getItem('auth'))
        const fetchMerchants = async () => {
            try {
                setIsLoading(true); // Set loading state before fetching

                const accessToken = userInfo?.accessToken
                const response = await getMerchantsApi(accessToken);

                if (response.status === 200) {
                    const result = await response.json();
                    if(result.length > 0 ) {
                        setData(result);
                    }
                } else {
                    setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
                }
            } catch (error) {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            } finally {
                setIsLoading(false); 
            }
        };

        fetchMerchants();

    }, []);


    

     const handleRowClick = (row) => {
        navigate(`/dashboard/${row.id}`)
    }


    return (
        <PermissionWrapper hasPermission={true}>
            <ContentPage>
                <TopBar />
                    <Grid container spacing={2} className="merchants">
                        <Grid item xs={9}>
                            <TableContainer component={Paper} >
                                <Table aria-label="simple table">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Id</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell>Document</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {data.map((row, index) => (
                                        <TableRow
                                        onClick={() => handleRowClick(row)}
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
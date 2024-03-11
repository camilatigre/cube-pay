import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import BalanceCard from './BalanceCard'
import ContentPage from '../commons/ContentPage/ContentPage'
import { Typography } from "@mui/material";
import {getWalletsApi} from '../../api/api'
import './styles.css'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


const walletMock = [
  {
    "id": "wa_m305RMTJrDqFHpZLL",
    "balance": 0,
    "currency": "BRL"
  }
]


const HomePage = () => {
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [wallet, setWallet] = useState(walletMock) // alterar quando a api estiver funcionando
    
    const envSelectedId = useSelector((state) => state.dashboard.envSelectedId);

     useEffect(() =>  {
        

        const getWallets = async () => {
            try {

                const accessToken = userInfo?.accessToken
                console.log(envSelectedId)
                const response = await getWalletsApi(envSelectedId, accessToken);

                if (response.status === 200) {
                    setIsLoading(false)
                    const result = await response.json();
                    setWallet(result)  
                } else {
                    setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
                }
            } catch (error) {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            }
        };

        getWallets()

    }, []);
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />

                <ContentPage>
                    <Grid item sm={12}>
                        <Typography variant="h2">Home</Typography>
                        <Typography variant="body2">Boas vindas ao PagTree!</Typography>
                    </Grid>
                    <Grid container spacing={2} className="balance-cards">
                        <Grid item sm={4} >
                            <BalanceCard coin={wallet[0].currency} balance={wallet[0].balance} />
                        </Grid>
                        {/* <Grid item sm={4}>
                            <BalanceCard coin="USD" balance="200,50" />
                        </Grid>
                        <Grid item sm={4}>
                            <BalanceCard coin="EUR" balance="00,00" />
                        </Grid>
                        <Grid item sm={6}>
                            <Card className='card'>
                                <Typography variant="h6">
                                    {"4,97"}{" USD/BRL"}
                                </Typography>
                                    
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <Card className='card'>
                            <Typography variant="h6">
                                {"157.048"}{" Transactions"}
                            </Typography>
                                
                        </Card>
                        </Grid> */}
                    </Grid>
                </ContentPage>
            </Grid>
        </>
    )
}

export default HomePage;
import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import BalanceCard from './BalanceCard'
import ContentPage from '../commons/ContentPage/ContentPage'
import { Typography } from "@mui/material";
import {getWalletsApi} from '../../api/api'
import './styles.css'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const HomePage = () => {
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [wallets, setWallets] = useState() // alterar quando a api estiver funcionando
    let env = useSelector((state) => state.dashboard.envSelectedId)

     useEffect(() => {
        

        const getWallets = async () => {
            const accessToken = JSON.parse(sessionStorage.getItem('auth')).accessToken;
            const response = await getWalletsApi(env, accessToken);

            if (response.status === 200) {
                setIsLoading(false)
                const result = await response.json();
                setWallets(result)
            } else {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            }
        };

        getWallets()

    }, []);

    const handleContent = () => {

        if(isLoading) {
            return 'Carregando...'
        }

        if(!wallets) {
            return 'Não foi possivel encontrar nenhuma carteira.'
        }

        if(wallets){
            return wallets.map(wallet => <>
                <Grid key={wallet.id} spacing={2} className="balance-cards">
                    <Grid item sm={4}>
                        <BalanceCard coin={wallet.currency} balance={wallet.balance} />
                    </Grid>
                </Grid>
            </>)
        }

        
        
    }
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />

                <ContentPage className="content-page">
                    <Grid item sm={12}>
                        <Typography variant="h2">Home</Typography>
                        <Typography variant="body2">Boas vindas ao PagTree!</Typography>
                    </Grid>
                    {handleContent()}
                </ContentPage>
            </Grid>
        </>
    )
}

export default HomePage;
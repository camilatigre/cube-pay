import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import BalanceCard from './BalanceCard'
import ContentPage from '../commons/ContentPage/ContentPage'
import { Typography } from "@mui/material";
// import Card from '@mui/material/Card';

import './styles.css'

const HomePage = () => {

    
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
                            <BalanceCard coin="BRL" balance="41.293,93" />
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
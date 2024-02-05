import TopBar from "./commons/components/TopBar/TopBar";
import Menu from "./commons/components/Menu/Menu";
import Grid from '@mui/material/Grid';

const TransactionsPage = () => {
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                {'transactions'}
            </Grid>
        </>
    )
}

export default TransactionsPage;
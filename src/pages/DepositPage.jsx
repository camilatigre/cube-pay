import TopBar from "./commons/components/TopBar/TopBar";
import Menu from "./commons/components/Menu/Menu";
import Grid from '@mui/material/Grid';

const DepositPage = () => {
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                {'deposit'}
            </Grid>
        </>
    )
}

export default DepositPage;
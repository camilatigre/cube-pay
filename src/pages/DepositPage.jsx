import TopBar from "./commons/TopBar/TopBar";
import Menu from "./commons/Menu/Menu";
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
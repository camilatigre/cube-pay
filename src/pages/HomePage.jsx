import TopBar from "./commons/components/TopBar/TopBar";
import Menu from "./commons/components/Menu/Menu";
import Grid from '@mui/material/Grid';

const HomePage = () => {
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                {'dashboard'}
            </Grid>
        </>
    )
}

export default HomePage;
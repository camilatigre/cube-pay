import Grid from '@mui/material/Grid';

// eslint-disable-next-line react/prop-types
const ContentPage = ({ children }) => {
    return (
        <Grid item sm={9} className="content-page">
            {children}
        </Grid>
    );
};

export default ContentPage;
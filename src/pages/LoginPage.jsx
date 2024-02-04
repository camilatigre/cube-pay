import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopBar from './commons/components/TopBar/TopBar'
import { Grid, TextField, Typography, Paper, Button } from '@mui/material'; 
import './styles.css'

const LoginPage = () => {
  
    return  (
       <div className='login-page'>   
            <TopBar isLoginPage={true} />
            <CssBaseline />
            
            <Container maxWidth="sm">
                <Grid container>
                    <Paper className="wrapper" elevation={3}>
                        <Typography variant="h4">
                            Insira suas credenciais para começar a usar o <strong>Cubo Pay</strong>
                        </Typography>
                        <Grid container sm={12}>
                            <Grid item sm={12}>
                                <TextField label="E-mail" variant="outlined" />
                        
                            </Grid>
                            <Grid item sm={12}>
                                <TextField label="Password" variant="outlined" type="password" />
                            </Grid>
                            <Grid  container sm={12} justifyContent="space-around">
                                <Grid item sm={6}>
                                    <Button variant="text">Esqueceu a senha?</Button>   
                                </Grid>
                                <Grid item sm={6} style={{display: 'flex'}} justifyContent="flex-end">
                                    <Button variant="outlined">Entrar</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
       </div>
    )
}

export default LoginPage;
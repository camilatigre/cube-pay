import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TopBar from '../commons/TopBar/TopBar'
import {
Grid,
TextField,
Typography,
Paper,
Button,
} from '@mui/material'; 
import './styles.css'
import useLogin from './useLogin'

const Login = () => {
    const { credentials, errors, isLoading, handleInputChange, handleSubmit } = useLogin({ email: '', password: '' });
    return  (
       <div className='login-page'>   
            <TopBar isLoginPage={true} />
            <CssBaseline />
            
            <Container maxWidth="sm">
                <Grid container>
                    <Paper className="wrapper" elevation={3}>
                        <Typography variant="h4">
                            <strong>Login</strong>
                        </Typography>
                        <Grid container>
                            <Grid item md={12}>
                                <TextField
                                label="E-mail"
                                variant="outlined"
                                name="email"
                                value={credentials.email}
                                onChange={handleInputChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                />
                            </Grid>
                            <Grid item md={12}>
                                {errors._general && (
                                    <Typography variant="body2" color="error" component="p">
                                        {errors._general}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid  container justifyContent="space-around">
                                <Grid item md={6}>
                                    <Button variant="text">Esqueceu a senha?</Button>   
                                </Grid>
                                
                                <Grid item md={6} style={{display: 'flex'}} justifyContent="flex-end">
                                    <Button variant="outlined" onClick={handleSubmit}>{isLoading ? 'Entrando' : 'Entrar'}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
       </div>
    )
}

export default Login;
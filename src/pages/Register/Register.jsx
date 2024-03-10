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
import useRegister from './useRegister'
import { NavLink } from "react-router-dom";

const Register = () => {
    const { credentials, apiErrors, validationErrors, isLoading, handleInputChange, handleSubmit } = useRegister({ name: '', email: '', password: '' });
    return (
        <div className='login-page'>
            <TopBar isLoginPage={true} />
            <CssBaseline />

            <Container maxWidth="sm">
                <Grid container>
                    <Paper className="wrapper" elevation={3}>
                        <Typography variant="h4">
                            <strong>Cadastro</strong>
                        </Typography>
                        <Grid container>
                            <Grid item md={12}>
                                <TextField
                                    label="Nome"
                                    variant="outlined"
                                    name="name"
                                    value={credentials.name}
                                    onChange={handleInputChange}
                                    error={!!validationErrors.name}
                                    helperText={validationErrors.name}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="E-mail"
                                    variant="outlined"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleInputChange}
                                    error={!!validationErrors.email}
                                    helperText={validationErrors.email}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    label="Senha"
                                    variant="outlined"
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
                                    error={!!validationErrors.password}
                                    helperText={validationErrors.password}
                                />
                            </Grid>
                            <Grid item md={12}>
                                {apiErrors._general && (
                                    <Typography variant="body2" color="error" component="p">
                                        {apiErrors._general}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid container justifyContent="space-around">
                                <Grid item md={6}>
                                    <NavLink to="/">
                                        <Button variant="text" >Já tenho login</Button>    
                                    </NavLink> 
                                </Grid>

                                <Grid item md={6} style={{ display: 'flex' }} justifyContent="flex-end">
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

export default Register;
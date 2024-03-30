import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import './styles.css'
import {getChargesApi} from '../../api/api'
import ChargesTable from "./ChargesTable";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ContentPage from '../commons/ContentPage/ContentPage'
import { useSelector } from "react-redux";

const Charges = () => {
    const [table, setTableValue] = useState([])
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    let env = useSelector((state) => state.dashboard.envSelectedId)

    useEffect(() =>  {
        const accessToken = JSON.parse(sessionStorage.getItem('auth')).accessToken;
        
        
        const getCharges = async () => {
          console.log(env)
            try {
                setIsLoading(true);
                const response = await getChargesApi(env, accessToken);

                if (response.status === 200) {
                    const result = await response.json();
                    setTableValue(result);
                    
                } else {
                    setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
                }
            } catch (error) {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            } finally {
                setIsLoading(false); 
            }
        };


        getCharges();


    }, []);

    console.log(table)
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                
                <ContentPage className="content-page">
                  <Typography variant="h2">Depósitos</Typography>
                  <div className="charges">
                    <ChargesTable table={table} isLoading={isLoading} />
                  </div>

                </ContentPage>
            </Grid>
        </>
    )
}

export default Charges;
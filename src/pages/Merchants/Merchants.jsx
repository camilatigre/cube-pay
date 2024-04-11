import TopBar from "../../commons/TopBar/TopBar";
import Grid from '@mui/material/Grid';
import MerchantsTable from "./MerchantsTable"
import MerchantCreate from "./MerchantCreate"
import PermissionWrapper from "../../commons/PermissionWrapper/PermissionWrapper";
import { Typography, Button } from "@mui/material";
import { getMerchantsApi } from '../../api/api'; 
import './styles.css'
import { useEffect, useState} from "react";
import ContentPage from '../../commons/ContentPage/ContentPage'
import { NavLink } from "react-router-dom";

const MerchantsPage = () => {
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [merchants, setData] = useState();

    useEffect(() =>  {
        const userInfo = JSON.parse(sessionStorage.getItem('auth'))
        const fetchMerchants = async () => {
            try {
                setIsLoading(true);

                const accessToken = userInfo?.accessToken
                const response = await getMerchantsApi(accessToken);

                if (response.status === 200) {
                    const result = await response.json();
                    setData(result);
                    
                } else {
                    setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
                }
            } catch (error) {
                setApiErrors({ _general: 'Algo estranho aconteceu. Tente novamente mais tarde' });
            } finally {
                setIsLoading(false); 
            }
        };


        fetchMerchants();


    }, []);


    const handleContent = () => {
        if(isLoading) {
            return 'Carregando...'
        }

        if(merchants?.length > 0 && !isLoading) {
            return <>
                <div className="title-button">
                    <Typography variant="h2">Mercantes</Typography>
                    <NavLink to="/merchants/create" className="button">
                        <Button variant="text" >Cadastrar mercante</Button>    
                    </NavLink> 
                </div>
                <MerchantsTable data={merchants} />
            
            </>
        }

        if(merchants?.length === 0 && !isLoading) {
            return <MerchantCreate />
        }

    }


    return (
        <PermissionWrapper hasPermission={true}>
                <TopBar />

                <ContentPage className="content-page">
                    
                    <Grid container spacing={2} className="merchants">
                        <Grid item xs={9}>
                            {handleContent()}
                        </Grid>
                    </Grid>
                </ContentPage>
        </PermissionWrapper>
    )
}

export default MerchantsPage;
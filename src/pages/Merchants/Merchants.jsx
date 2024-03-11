import TopBar from "../commons/TopBar/TopBar";
import Grid from '@mui/material/Grid';
import MerchantsTable from "./MerchantsTable"
import MerchantCreate from "./MerchantCreate"
import PermissionWrapper from "../commons/PermissionWrapper/PermissionWrapper";

import { getMerchantsApi } from '../../api/api'; 
import './styles.css'
import { useEffect, useState} from "react";
// [
//         {
//             id: 'm_EZhxvcFaEB0hVxs08',
//             name: 'ACME Inc.',
//             type: 'business',
//             document: '0000022221'
//         },
//         {
//             id: 'm_EZhxvcFaEB0hVxs07',
//             name: 'Arcor',
//             type: 'personal',
//             document: '0000022221'
//         }
//     ]
const MerchantsPage = () => {
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [merchants, setData] = useState();

    useEffect(() =>  {
        const userInfo = JSON.parse(sessionStorage.getItem('auth'))
        console.log(userInfo)
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
            return <MerchantsTable data={merchants} />
        }

        if(merchants?.length === 0 && !isLoading) {
            return <MerchantCreate />
        }

    }


    return (
        <PermissionWrapper hasPermission={true}>
                <TopBar />
                    <Grid container spacing={2} className="merchants">
                        <Grid item xs={9}>
                            {handleContent()}
                        </Grid>
                    </Grid>
        </PermissionWrapper>
    )
}

export default MerchantsPage;
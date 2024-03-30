import TopBar from "../commons/TopBar/TopBar";
import Menu from "../commons/Menu/Menu";
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react'
import './styles.css'
import {getChargesApi} from '../../api/api'
import ChargesTable from "./ChargesTable";

const chargesMock = {
  "total": 0,
  "count": 0,
  "previousPage": {
    "after": "FjApkGWQbNdRW14LG",
    "take": 20,
    "href": "/_private/environments/env_0PR863Q0An5WvF0cg/charges?take=20&after=FjApkGWQbNdRW14LG"
  },
  "nextPage": {
    "after": "FjApkGWQbNdRW14LG",
    "take": 20,
    "href": "/_private/environments/env_0PR863Q0An5WvF0cg/charges?take=20&after=FjApkGWQbNdRW14LG"
  },
  "items": [
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },{
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    },
    {
      "id": "ch_4G34Pt9ajd1a4G6CW",
      "status": "created",
      "amount": 0,
      "currency": "BRL",
      "meta": {
        "description": "Charge for invoice #123"
      },
      "idempotencyKey": "my_0wn_un1qu3_1d_f0r_th3_ch4rg3",
      "createdAt": "2024-02-29T13:00:01.123456Z",
      "updatedAt": "2024-02-29T13:00:01.123456Z"
    }
  ]
};

const Charges = () => {
    const [table, setTableValue] = useState([])
    const [apiErrors, setApiErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>  {
        const userInfo = JSON.parse(sessionStorage.getItem('auth'))
        console.log(userInfo)
        const fetchMerchants = async () => {
            try {
                setIsLoading(true);

                const accessToken = userInfo?.accessToken
                const response = await getChargesApi(accessToken);

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


        fetchMerchants();


    }, []);

    const handleContent = () => {
        if(isLoading) {
            return 'Carregando...'
        }


        if(table?.length > 0 && !isLoading) {
            return <ChargesTable table={table} />
        }

        if(table?.length === 0 && !isLoading) {
            return <ChargesTable />
        }

    }
    return (
        <>
            <TopBar />
            <Grid container>
                <Menu />
                <div className="charges">
                  {handleContent()}
                    
                     
                </div>
            </Grid>
        </>
    )
}

export default Charges;
import {  useState } from 'react';
import { validateFields } from '../../utils/validateFields';
import { createMerchantApi } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const useLogin = (initialValues) => {
  const [fields, setFields] = useState(initialValues);
  const [validationErrors, setValidationErrors] = useState({});
  const [apiErrors, setApiErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
    setApiErrors({});
    setValidationErrors({})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateFields(fields, setValidationErrors)) return;

    const filteredObjects = Object.fromEntries(
        Object.entries(fields).filter(([key, value]) => value !== '')
      );

    setIsLoading(true);

    try {
      const token = JSON.parse(sessionStorage.getItem('auth')).accessToken

      
      const response = await createMerchantApi(filteredObjects, token);
      setIsLoading(false);

      if (response.status === 201) {
        const result = await response.json();
        
        navigate('/merchants')
        return; 
      }

      if (response.status !== 201) {
        setApiErrors({ _general: 'Algo estranho aconteceu. Cheque os campos obrigatórios'})
        return; 
      }
    } catch (error) {
      setIsLoading(false);
      setApiErrors({_general: 'Algo estranho ocorreu. Tente novamente mais tarde.'});
    }
  };

  return {
    fields,
    validationErrors,
    apiErrors,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};

export default useLogin;
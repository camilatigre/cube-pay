import { useEffect, useState } from 'react';
import { validateFields } from '../../utils/validateFields';
import { signUpApi } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const useLogin = (initialValues) => {
  const [credentials, setCredentials] = useState(initialValues);
  const [validationErrors, setValidationErrors] = useState({});
  const [apiErrors, setApiErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    sessionStorage.clear();
  }, [])

  const handleInputChange = (event) => {
    
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
    setApiErrors({});
    setValidationErrors({})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(credentials)
    if (validateFields(credentials, setValidationErrors)) return;

    setIsLoading(true);

    try {
      const response = await signUpApi(credentials);
      setIsLoading(false);

      if (response.status === 201) {
        const result = await response.json();
        sessionStorage.setItem('auth', JSON.stringify(result));
        navigate('/merchants')
        return; 
      }

      if (response.status !== 200) {
        setApiErrors({ _general: 'Algo estranho aconteceu. Cheque suas credenciais'})
        return; 
      }
    } catch (error) {
      setIsLoading(false);
      setApiErrors({_general: 'Algo estranho ocorreu. Tente novamente mais tarde.'});
    }
  };

  return {
    credentials,
    validationErrors,
    apiErrors,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};

export default useLogin;
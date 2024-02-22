export const validateFields = (credentials, setErrors) => {
    const validationErrors = {
        email: '',
        password: ''
    };

    if (!credentials.email) {
        validationErrors.email = 'Por favor, informe seu e-mail';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email)) {
        validationErrors.email = 'Por favor, informe um e-mail válido';
    }

    if (!credentials.password) {
        validationErrors.password = 'Por favor, informe sua senha';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        return credentials
    }
}
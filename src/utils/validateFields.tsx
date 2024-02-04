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
        // Send credentials to server if there are no errors
        console.log('Credentials to send:', credentials); // Replace with your actual submission logic
    }
}
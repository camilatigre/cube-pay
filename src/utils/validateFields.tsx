export const validateFields = (credentials, setErrors) => {
    const validationErrors = {
        type: '',
        name: '',
        email: '',
        password: '',
        document: ''
    };

    if (!credentials.document || credentials.document.length != 11) {
        validationErrors.document = 'Por favor, informe o documento com 11 caracters';
    }

    if (!credentials.type) {
        validationErrors.type = 'Por favor, informe o tipo "business" ou "personal"';
    }

    if (!credentials.name) {
        validationErrors.name = 'Por favor, informe seu nome';
    }

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
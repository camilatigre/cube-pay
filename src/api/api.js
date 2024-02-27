const baseUrl = `http://api.staging.pagtree.31.220.53.245.nip.io:4000/`;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const handleApi = async (endpoint, method, body = null) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      let errorMessage = `API call failed with status ${response.status}`;
      const contentType = response.headers.get('Content-Type');

      
      if (contentType?.includes('json')) {
        try {
          const errorData = await response.json();
          errorMessage = parseErrorMessage(errorData);
        } catch (error) {
          return error
        }
      }

      throw new Error(errorMessage); 
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message  
  }
};

const parseErrorMessage = (errorData) => {
  if (errorData?.message) {
    return errorData.message;
  } else if (errorData?.errors) {
    // Handle specific error codes or messages based on your API's structure
    return 'Validation errors occurred. Please check your input.'; // Example placeholder
  } else {
    return 'An unexpected error occurred.';
  }
};

export const loginApi = async (credentials) => {
  return await handleApi('_private/auth/sign-in', 'POST', credentials);
};

export const getMerchantsApi = async () => {
  return await handleApi('_private/merchants', 'GET');
};

const baseUrl = `http://api.staging.pagtree.31.220.53.245.nip.io:4000/`
export const loginApi = async (credentials) => {
  console.log(credentials, 'credentials api')
  try {
    const response = await fetch(`${baseUrl}_private/auth/sign-in`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173',
      },
      data: JSON.stringify(credentials),
    });

    

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
  }
};
const baseUrl = `http://api.staging.pagtree.31.220.53.245.nip.io:4000/`;
const handleApi = async (endpoint, method, body = null, token = '') => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: body ? JSON.stringify(body) : null,
    });
    return response;
  } catch (error) {
    return error.message  
  }
};

export const loginApi = async (credentials) => {
  return await handleApi('_private/auth/sign-in', 'POST', credentials);
};

export const signUpApi = async (credentials) => {
  return await handleApi('_private/auth/sign-up', 'POST', credentials);
};

export const createMerchantApi = async (fields, token) => {
  return await handleApi('_private/merchants', 'POST', fields, token);
};

export const getMerchantsApi = async (token) => {
  return await handleApi('_private/merchants', 'GET', null, token);
};

export const getEnvByMerchantApi = async (merchantId, token) => {
  return await handleApi(`_private/merchants/${merchantId}`, 'GET', null, token);
};

export const getWalletsApi = async (envSelectedId, token) => {
  return await handleApi(`_private/environments/${envSelectedId}/wallets`, 'GET', null, token);
};

export const getChargesApi = async (envSelectedId, token) => {
  return await handleApi(`_private/environments/${envSelectedId}/charges`, 'GET', null, token);
};

export const signOut = async () => {
  return await handleApi(`_private/auth/sign-out`, 'GET');
};
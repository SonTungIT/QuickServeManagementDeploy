export const BASE_URL =
    'https://quick-serve-server.azurewebsites.net/api/v1';

//Athentication endpoints
export const loginEndpoint = `${BASE_URL}/Account/Authenticate`;
export const registerEndpoint = '/register';

//User endpoints
export const getAllUsersEndpoint = `${BASE_URL}/Account/GetPagedListAccountQuery`;

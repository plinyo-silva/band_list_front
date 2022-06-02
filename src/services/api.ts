import axios from 'axios';
// import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://xqwsf2o3ei.execute-api.us-east-1.amazonaws.com/v1/api',

});

//bands/details/{id}

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);
export default api;

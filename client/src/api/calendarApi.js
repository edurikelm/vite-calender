import axios from 'axios';
import { getEnvcVariables } from '../helpers';

const { VITE_API_URL } = getEnvcVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// Todo: configurar interceptores
calendarApi.interceptors.request.use((config) => {

  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config;
});

export default calendarApi;

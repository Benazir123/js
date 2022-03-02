import Helper from '@/globalFunctions/Helper';
import axios from 'axios';

export default ({ requiresAuth = false } = {}) => {
  const options = {
    baseURL: process.env.VUE_APP_API_URL as any,
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
    },
  };
  if (requiresAuth) {
    options.headers.Authorization = ('Bearer ' + localStorage.getItem('token')) as any;
  }
  const instance = axios.create(options);
  instance.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const originalRequest = error.config;
      console.log(originalRequest);

      switch (error.response.status) {
        case 400:
          console.log(error + ' : Bad Request');
          return error.response;
          break;
        case 401:
          Helper.logout();
          console.log(error.message + ' : This api getting 401 error'); // or here
          break;
        case 404:
          console.log(error.message + ' : This api getting 404 error');
          break;
        case 500:
          console.log(error.message + ' : This api getting 500 error'); // or here
          break;
        case 502:
          console.log(error.message + ' : This api getting 502 error'); // or here
          break;
        default:
          console.log(error.message + ' : This api getting some other error'); // end up here all the time
          return Promise.reject(error);
      }
      if (originalRequest.url === '/client_admin/sign_in') {
        return Promise.reject(error.response);
      } else {
        return Promise.reject(error);
      }
    },
  );
  return instance;
};

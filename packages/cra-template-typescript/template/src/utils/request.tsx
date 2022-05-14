import axios from 'axios';
import type { Method, AxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  ignoreToken?: boolean;
}

const defaultHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json'
};

const axiosInstance = axios.create({
  timeout: 20000,
  headers: defaultHeaders
});

export default function request(url: string, method: Method = 'post', options?: CustomAxiosRequestConfig) {
  return (fetchData: any) => {
    const { ignoreToken, headers, ...restOptions } = options || {};
    const lowerMethod = method.toLocaleLowerCase();
    const option = { url, method: lowerMethod, ...restOptions };

    // 接口添加 Token
    if (!ignoreToken) {
      if (headers) {
        // headers.Authorization = getTokenData()[TOKEN];
      } else {
        // option.headers = { Authorization: getTokenData()[TOKEN] };
      }
    }

    if (lowerMethod === 'get' || lowerMethod === 'delete') {
      option.params = fetchData;
    } else {
      option.data = fetchData;
    }

    return axiosInstance(option).then(
      response => {
        const { status, data: { code, data, success, desc } } = response;
        if (status === 200 && success) {
          return data;
        } else if (status === 200 && !success && code === 4001) {
          // 登陆过期，退出登陆
          // logout();
          const error = new Error(desc);
          throw error;
        } else {
          const error = new Error(desc);
          throw error;
        }
      },
      error => {
        throw error;
      }
    );
    // .catch(error => {
    //   Toast.show(error.message);
    // });
  };
}

import axios from "axios";
export const controller = new AbortController();


const baseURL = 'https://some-domain.com/api/';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {'X-Custom-Header': 'foobar'},
  signal: controller.signal
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 创建实例后修改默认值
export const setAuthorization = (token) => {
  instance.defaults.headers.common['Authorization'] = token;
}

export const setContentType = (type) => {
  instance.defaults.headers.post['Content-Type'] = type;
  // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
}

export default instance;
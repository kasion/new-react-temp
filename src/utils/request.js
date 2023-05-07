import axios, { controller, setAuthorization, setContentType } from "@utils/axios";

const request = {
  get: (url)=> axios.get(url),

  post: (url, data, config) => axios.post(url, data, config),

  delete: (url, data, config) => axios.delete(url, data, config),

  put: (url, data, config) => axios.put(url, data, config),

  // 取消请求
  abort: () => controller.abort(),

  setAuthorization,

  setContentType
}

export default request;
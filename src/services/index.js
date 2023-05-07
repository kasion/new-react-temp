import request from "@utils/request";

export const testApi = (url, data) => request.post(url, data);

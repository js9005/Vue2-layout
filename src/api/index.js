import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.interceptors.request.use(
  function (config) {
    // console.log(config, "리퀘스트 config");
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      "vue2_layout_token"
    )}`;
    return config; //안하면 Cannot read properties of undefined (reading 'cancelToken') 에러 발생
  },
  function (error) {
    // console.log(error, "리퀘스트 error");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    // console.log(response, "리스폰스 response");
    return response; //안하면 값을 받을 수 없음
  },
  function (error) {
    // console.log(error, "리스폰스 error");
    return Promise.reject(error);
  }
);

//로그인
export function loginApi(params) {
  return axios.post("sign", params);
}
//새로고침 시
export function getAdmin() {
  return axios.get("me");
}

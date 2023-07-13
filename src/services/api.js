import axios from "axios";
import getConfig from "next/config";

export const fetchApi = async function (
  endpoint,
  payload,
  headers,
  auth,
  method = "get"
) {
  const { publicRuntimeConfig } = getConfig();
  if (headers === {}) {
    headers["Content-Type"] = "application/json";
  } else if (headers === 1) {
    headers = {};
  }
  if (auth === true) {
    const isServer = typeof window === "undefined";
    if (!isServer) {
      var token1 = await localStorage.getItem("access_token");
    }
    var token = JSON.parse(token1);
    headers.Authorization = token;
  }
  const axiosConfig = {
    headers,
    method: method.toLowerCase(),
  };
  if (axiosConfig.method === "get") {
    axiosConfig.params = payload;
  } else if (axiosConfig.method === "delete") {
    axiosConfig.params = payload;
  } else {
    axiosConfig.data = payload;
  }

  var url1 = publicRuntimeConfig.reactAppUrl + endpoint;

  return axios(url1, axiosConfig);
};

axios.interceptors.request.use(
  function (config) {
    
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    
    return response;
  },
  function (error) {
    
    return Promise.reject(error);
  }
);

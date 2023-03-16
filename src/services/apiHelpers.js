import { store } from "@/redux/store";
import axios from "axios";

export const baseUrl = "http://sdims.meropalika.com/api";
export const commonUrl =  "http://sdims.meropalika.com/api/Admin/Common";
export const planningUrl = "http://sdims.meropalika.com/api/Planning/PLCommon"
export const revenueUrl = "http://sdims.meropalika.com/api/revenue/common"

export const authApi = async (method, url, data) => {

  let response = await axios({
    method,
    url: `${baseUrl}${url}`,
    data,
  });
  return response.data;
};
export const commonApi = async (method, url, data) => {
  const tok = store.getState()
  let response = await axios({
    method,
    url: `${commonUrl}${url}`,
    data,
    headers:{
      Authorization:`Bearer ${tok.userDetail.user?.data?.token}`
    }
  });
  return response.data;
};
export const planningApi = async (method, url, data) => {
  const tok = store.getState()
  let response = await axios({
    method,
    url: `${planningUrl}${url}`,
    data,
    headers:{
      Authorization:`Bearer ${tok.userDetail.user?.data?.token}`
    }
  });
  return response.data;
};
export const revenueApi = async (method, url, data) => {
  const tok = store.getState()
  let response = await axios({
    method,
    url: `${revenueUrl}${url}`,
    data,
    headers:{
      Authorization:`Bearer ${tok.userDetail.user?.data?.token}`
    }
  });
  return response.data;
};
export const authenticatedApi = async (method, url,data) => {
  const tok = store.getState()
  let response = await axios({
    method,
    url: `${commonUrl}${url}`,
    data,
    headers:{
      Authorization:`Bearer ${tok.userDetail.user?.data?.token}`
    }
  });
  return response.data;
};


import apiUrls from "../../../apiUrls";
import { planningApi } from "../../../apiHelpers";

export const bhuktaniType = async () => {
  let response = await planningApi(
    apiUrls.planning.bhuktaniType.bhuktaniType.method,
    apiUrls.planning.bhuktaniType.bhuktaniType.url,
  );
  return response
};
export const createBhuktaniType = async (data) => {
  let response = await planningApi(
    apiUrls.planning.bhuktaniType.createBhuktaniType.method,
    apiUrls.planning.bhuktaniType.createBhuktaniType.url,
    data
  );
  return response;
};
export const deleteBhuktaniType = async (data) => {
    let response = await planningApi(
      apiUrls.planning.bhuktaniType.deleteBhuktaniType.method,
      apiUrls.planning.bhuktaniType.deleteBhuktaniType.url,
      data
    );
    return response;
  };
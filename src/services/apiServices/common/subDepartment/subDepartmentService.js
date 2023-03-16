import { commonApi } from "../../../apiHelpers";
import apiUrls from "../../../apiUrls";

export const subDepartment = async () => {
  let response = await commonApi(
    apiUrls.common.subDepartment.subDepartment.method,
    apiUrls.common.subDepartment.subDepartment.url,
  );
  return response
};
export const createSubDepartment = async (data) => {
  let response = await commonApi(
    apiUrls.common.subDepartment.createSubDepartment.method,
    apiUrls.common.subDepartment.createSubDepartment.url,
    data
  );
  return response;
};



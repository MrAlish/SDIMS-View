import { commonApi } from "../../../apiHelpers";
import apiUrls from "../../../apiUrls";

export const group = async () => {
  let response = await commonApi(
    apiUrls.common.group.group.method,
    apiUrls.common.group.group.url,
  );
  return response
};
export const createGroup = async (data) => {
  let response = await commonApi(
    apiUrls.common.group.createGroup.method,
    apiUrls.common.group.createGroup.url,
    data
  );
  return response;
};



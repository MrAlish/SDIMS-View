import { yupResolver } from "@hookform/resolvers/yup";
import {
  addressSchema,
  codeSchema,
  emailSchema,
  endYearSchema,
  englishNameSchema,
  // faxNoSchema,
  nameEngSchema,
  nameSchema,
  phoneNoSchema,
  startYearSchema,
  urlSchema,
} from "../schema/common";
import * as yup from "yup";

export const fiscalValidationResolver = yupResolver(
  yup.object({
    name: nameSchema,
    name_En: englishNameSchema,
    code: codeSchema,
    startYear: startYearSchema,
    endYear: endYearSchema,
    // dateFrom: dateFromSchema,
    // dateFromEng: dateFromEngSchema,
    // dateTo: dateToSchema,
    // dateToEng: dateToEngSchema,
    // previousFiscalYearId:previousFiscalYearIdSchema
  })
);

export const officeValidationResolver = yupResolver(
  yup.object({
    name: nameSchema,
    name_En: englishNameSchema,
    code: codeSchema,
    address: addressSchema,
    phoneNo: phoneNoSchema,
    // faxNo: faxNoSchema,
    email: emailSchema,
    url: urlSchema,
    // stateId: stateIdSchema,
    // districtId: districtIdSchema,
    // palikaId: palikaIdSchema,
  })
);
export const departmentValidationResolver = yupResolver(
  yup.object({
    name: nameSchema,
    nameEng: nameEngSchema,
    code: codeSchema,
  })
);
export const wardValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
    name_En: englishNameSchema,
    code: codeSchema,
  })
);
export const counterValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
    name_En: englishNameSchema,
    code: codeSchema,
  })
);
export const rajPatrankitSheniValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
  })
);
export const shrediValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
  })
);
export const postValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
    nameEng: nameEngSchema,
  })
);
export const sewaValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
  })
);
export const groupValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
  })
);
export const castValidateResolver = yupResolver(
  yup.object({
    name: nameSchema,
    nameEng: nameEngSchema,
  })
);
export const buildingTypeValidationResolver = yupResolver(
  yup.object({
    name: nameSchema,
    name_Eng: nameEngSchema,
    code: codeSchema,
  })
);
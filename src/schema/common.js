import * as yup from "yup";

export const nameSchema = yup.string().required("This field is required");

export const englishNameSchema = yup
  .string()
  .required("This field is required");

export const codeSchema = yup
  .string()
  .max(3)
  .required("code must be of 3 characters only");

export const startYearSchema = yup
  .string()
  .min(4)
  .max(4)
  .required("This field must of 4 digit");

export const endYearSchema = yup
  .string()
  .min(4)
  .max(4)
  .required("This field must be of 4 digit");

export const dateFromSchema = yup.string().required("This field is required");

export const dateFromEngSchema = yup
  .string()
  .required("This field is required");

  // export const previousFiscalYearIdSchema = yup
  // .string()
  // .required("This field is required");

export const dateToSchema = yup.string().required("This field is required");

export const dateToEngSchema = yup.string().required("This field is required");

export const addressSchema = yup.string().required("This field is required");

export const phoneNoSchema = yup.string().required("This field is required");


export const emailSchema = yup.string().required("This field is required");

export const urlSchema = yup.string().required("This field is required");

export const nameEngSchema = yup.string().required("This field is required");

// export const stateIdSchema = yup.number().required("This field is required");

// export const districtIdSchema = yup.number().required("This field is required");

// export const palikaIdSchema = yup.number().required("This field is required");

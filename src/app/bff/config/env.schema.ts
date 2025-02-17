export const envSchema = {
  type: "object",
  required: [
    "ServiceKey",
    "ESTATE_API_URL",
    "LAWD_CD",
    "DEAL_YMD",

    "OFFICETEL",
    "APARTMENT",
    "MULTI_HOUSEHOLD",
    "SINGLE_MULTI_FAMILY",

    "BASE_BFF_API_URL",
  ],
  properties: {
    ServiceKey: { type: "string" },
    ESTATE_API_URL: { type: "string" },
    OFFICETEL: { type: "string" },
    APARTMENT: { type: "string" },
    MULTI_HOUSEHOLD: { type: "string" },
    SINGLE_MULTI_FAMILY: { type: "string" },
    LAWD_CD: { type: "string" },
    DEAL_YMD: { type: "string" },
    BASE_BFF_API_URL: { type: "string" },
  },
};

export const envSchema = {
  type: "object",
  required: ["ServiceKey", "ESTATE_API_URL", "LAWD_CD", "DEAL_YMD"],
  properties: {
    ServiceKey: { type: "string" },
    ESTATE_API_URL: { type: "string" },
    LAWD_CD: { type: "string" },
    DEAL_YMD: { type: "string" },
  },
};

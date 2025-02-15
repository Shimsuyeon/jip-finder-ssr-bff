export const estateResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      buildingInfo: {
        type: "object",
        properties: {
          year: { type: "string" },
          type: { type: "string" },
          area: { type: "string" },
        },
      },
      price: {
        type: "object",
        properties: {
          deposit: { type: "string" },
          monthlyRent: { type: "string" },
        },
      },
      location: {
        type: "object",
        properties: {
          district: { type: "string" },
        },
      },
    },
  },
};

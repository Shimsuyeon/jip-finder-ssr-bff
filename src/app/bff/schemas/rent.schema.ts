export const rentResponseSingleMultiFamilySchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      buildingInfo: {
        type: "object",
        properties: {
          type: { type: "string" },
          area: { type: "string" },
          year: { type: "string" },
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
      contract: {
        type: "object",
        properties: {
          date: { type: "string" },
          term: { type: "string" },
          type: { type: "string" },
        },
      },
    },
  },
};

export const rentResponseOfficetelSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      buildingInfo: {
        type: "object",
        properties: {
          name: { type: "string" },
          area: { type: "string" },
          floor: { type: "string" },
          year: { type: "string" },
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
      contract: {
        type: "object",
        properties: {
          date: { type: "string" },
          term: { type: "string" },
          type: { type: "string" },
        },
      },
    },
  },
};

export const rentResponseApartmentSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      buildingInfo: {
        type: "object",
        properties: {
          name: { type: "string" },
          area: { type: "string" },
          floor: { type: "string" },
          year: { type: "string" },
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
      contract: {
        type: "object",
        properties: {
          date: { type: "string" },
          term: { type: "string" },
          type: { type: "string" },
        },
      },
    },
  },
};

export const rentResponseMultiHouseHoldSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "string" },
      buildingInfo: {
        type: "object",
        properties: {
          type: { type: "string" },
          name: { type: "string" },
          area: { type: "string" },
          floor: { type: "string" },
          year: { type: "string" },
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
      contract: {
        type: "object",
        properties: {
          date: { type: "string" },
          term: { type: "string" },
          type: { type: "string" },
        },
      },
    },
  },
};

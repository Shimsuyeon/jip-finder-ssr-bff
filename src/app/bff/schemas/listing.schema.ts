export const listingResponseSchema = {
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        items: {
          type: "object",
          properties: {
            item: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  buildYear: { type: "string" },
                  dealDay: { type: "string" },
                  dealMonth: { type: "string" },
                  dealYear: { type: "string" },
                  deposit: { type: "string" },
                  houseType: { type: "string" },
                  monthlyRent: { type: "string" },
                  totalFloorAr: { type: "string" },
                  umdNm: { type: "string" },
                },
              },
            },
          },
        },
        numOfRows: { type: "string" },
        pageNo: { type: "string" },
        totalCount: { type: "string" },
      },
    },
  },
};

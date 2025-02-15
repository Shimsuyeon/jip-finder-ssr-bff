export interface ListingItem {
  buildYear: string;
  dealDay: string;
  dealMonth: string;
  dealYear: string;
  deposit: string;
  houseType: string;
  monthlyRent: string;
  totalFloorAr: string;
  umdNm: string;
}

export interface ListingResponse {
  data: {
    items: {
      item: ListingItem[];
    };
    numOfRows: string;
    pageNo: string;
    totalCount: string;
  };
}

export interface FrontendListing {
  id: string;
  buildingInfo: {
    year: string;
    type: string;
    area: string;
  };
  price: {
    deposit: string;
    monthlyRent: string;
  };
  location: {
    district: string;
  };
}

export interface FrontendListingResponse {
  data: {
    items: {
      item: FrontendListing[];
    };
    numOfRows: string;
    pageNo: string;
    totalCount: string;
  };
}

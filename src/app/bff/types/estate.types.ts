export interface EstateItem {
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

export interface EstateResponse {
  data: {
    items: {
      item: EstateItem[];
    };
    numOfRows: string;
    pageNo: string;
    totalCount: string;
  };
}

export interface FrontendEstate {
  id: string;
  buildingInfo: {
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

export interface FrontendEstateResponse {
  data: {
    items: {
      item: FrontendEstate[];
    };
    numOfRows: string;
    pageNo: string;
    totalCount: string;
  };
}

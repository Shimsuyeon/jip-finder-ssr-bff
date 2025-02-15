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

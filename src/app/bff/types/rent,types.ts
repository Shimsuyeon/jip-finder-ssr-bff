export type RentType =
  | "officetel"
  | "apartment"
  | "multiHousehold"
  | "singleMultiFamily";

export interface RentItem {
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

export interface RentBaseItem {
  sggCd: "string"; //지역코드(시군구 코드라는 뜻) ex: 11110
  umdNm: "string"; //법정동 ex: 청운동

  dealYear: "string"; //계약년 ex: 2025
  dealMonth: "string"; //계약월 ex: 02
  dealDay: "string"; //계약일 ex: 15

  deposit: "string"; //보증금 ex: 10000
  monthlyRent: "string"; //월세세 ex: 100

  contractTerm: "string"; // 계약기간 ex: 25.03~27.03
  contractType: "string"; // 계약구분 ex: 신규

  useRRRight: "string"; // 갱신요구권 사용
  preDeposit: "string"; // 종전계약보증금
  preMonthlyRent: "string"; // 종전계약월세
}

// 전용면적: 공동주택에서 소유자가 독점하는 면적
// 연면적: 각 층 바닥 면적의 합

// 오피스텔
export interface RentOfficetelItem extends RentBaseItem {
  sggNm: "string"; //시군구 ex: 종로구

  jibun: "string"; // 지번: ex: 1425

  //api 문서에 offiname이라 되어있는데 실제론 offiNm임
  offiNm: "string"; // 오피스텔명: 한라운종가
  excluUseAr: "string"; // 전용면적: 59.97

  floor: "string"; // 층: 9
  buildYear: "string"; // 건축년도: 2016
}

// 아파트
export interface RentApartmentItem extends RentBaseItem {
  jibun: "string"; // 지번 ex: 596

  aptNm: "string"; //아파트명 ex: 삼성
  excluUseAr: "string"; // 전용면적: 59.97
  floor: "string"; // 층 ex: 9
  buildYear: "string"; // 건축년도 ex: 2016
}

// 단독/다가구
export interface RentSingleMultiFamilyItem extends RentBaseItem {
  houseType: "string"; // 주택 유형(단독 or 다가구)

  totalFloorAr: "string"; // 연면적 ex: 55

  buildYear: "string"; // 건축년도 ex: 2016
}

// 연립다세대
export interface RentMultiHouseholdItem extends RentBaseItem {
  houseType: "string"; //주택 유형(연립 or 다세대)
  floor: "string"; //층 ex: 2
  mhouseNm: "string"; //연립다세대명 ex: 북악더테라스2단지
  excluUseAr: "string"; //전용면젹 ex: 84.99
  buildYear: "string"; //건축년도

  jibun: "string"; //지번 ex: 211-11
}

export interface RentResponse<T> {
  data: {
    items: {
      item: T[];
    };
    numOfRows: string;
    pageNo: string;
    totalCount: string;
  };
}

export type RentOfficetelResponse = RentResponse<RentOfficetelItem>;
export type RentApartmentResponse = RentResponse<RentApartmentItem>;
export type RentSingleMultiFamilyResponse =
  RentResponse<RentSingleMultiFamilyItem>;
export type RentMultiHouseholdResponse = RentResponse<RentMultiHouseholdItem>;

export interface FrontenRent {
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

export interface FrontendRent {
  id: string;
  buildingInfo: {
    type: string; // houseType
    area: string; //totalFloorAr
  };
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //umdNm
  };
}

export interface FrontendRentBase {
  id: string;
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //umdNm
  };
  contract: {
    date: string; //dealYear + dealMonth + dealDay
    term: string; // contractTerm
    type: string; // contractType
  };
}

//오피스텔
export interface FrontendRentOfficetel {
  id: string;
  buildingInfo: {
    name: string; //offiNm
    area: string; //excluUseAr
    floor: string; //floor
    year: string; //buildYear
  };
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //sggNm + umdNm + jibun
  };
  contract: {
    date: string; //dealYear + dealMonth + dealDay
    term: string; // contractTerm
    type: string; // contractType
  };
}
//아파트
export interface FrontendRentApartment {
  id: string;
  buildingInfo: {
    name: string; //aptNm
    area: string; //excluUseAr
    floor: string; //floor
    year: string; //buildYear
  };
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //umdNm + jibun
  };
  contract: {
    date: string; //dealYear + dealMonth + dealDay
    term: string; // contractTerm
    type: string; // contractType
  };
}

//단독/다가구
export interface FrontendRentSingleMultiFamily {
  id: string;
  buildingInfo: {
    type: string; // houseType
    area: string; //totalFloorAr
    year: string; //buildYear
  };
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //umdNm
  };
  contract: {
    date: string; //dealYear + dealMonth + dealDay
    term: string; // contractTerm
    type: string; // contractType
  };
}
//연립다세대
export interface FrontendRentMultiHousehold {
  id: string;
  buildingInfo: {
    type: string; // houseType
    name: string; //mhouseNm
    area: string; //execluUseAr
    floor: string; //floor
    year: string; //buildYear
  };
  price: {
    deposit: string; //deposit
    monthlyRent: string; //monthlyRent
  };
  location: {
    district: string; //umdNm + jibun
  };
  contract: {
    date: string; //dealYear + dealMonth + dealDay
    term: string; // contractTerm
    type: string; // contractType
  };
}

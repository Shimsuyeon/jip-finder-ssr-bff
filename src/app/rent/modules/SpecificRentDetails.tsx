import {
  FrontendRentApartment,
  FrontendRentMultiHousehold,
  FrontendRentOfficetel,
  FrontendRentSingleMultiFamily,
  RentType,
} from "@/app/bff/types/rent,types";

interface Props {
  rent:
    | FrontendRentSingleMultiFamily
    | FrontendRentMultiHousehold
    | FrontendRentOfficetel
    | FrontendRentApartment;
  type: RentType;
}

export default function SpecificRentDetails({ rent, type }: Props) {
  if (type === "singleMultiFamily") {
    const specificRent = rent as FrontendRentSingleMultiFamily;
    return (
      <div>
        <h3 className="text-lg font-medium">
          🏠 {specificRent.buildingInfo.type} ({specificRent.buildingInfo.area}
          ㎡)
        </h3>
      </div>
    );
  }
  if (type === "officetel") {
    const specificRent = rent as FrontendRentOfficetel;
    return (
      <div>
        <h3 className="text-lg font-medium">
          🏢 {specificRent.buildingInfo.name} {specificRent.buildingInfo.floor}
          층 ({specificRent.buildingInfo.area}㎡, )
        </h3>
      </div>
    );
  }
  if (type === "apartment") {
    const specificRent = rent as FrontendRentApartment;
    return (
      <div>
        <h3 className="text-lg font-medium">
          🌆 {specificRent.buildingInfo.name} {specificRent.buildingInfo.floor}
          층 ({specificRent.buildingInfo.area}
          ㎡)
        </h3>
      </div>
    );
  }
  if (type === "multiHousehold") {
    const specificRent = rent as FrontendRentMultiHousehold;
    return (
      <div>
        <h3 className="text-lg font-medium">
          🌇 {specificRent.buildingInfo.name} {specificRent.buildingInfo.floor}
          층 ({specificRent.buildingInfo.area}
          ㎡)
        </h3>
      </div>
    );
  }

  return null;
}

"use client";
import { useState, useEffect } from "react";
import CommonRentItem from "./modules/CommonRentItem";
import SpecificRentDetails from "./modules/SpecificRentDetails";
import {
  FrontendRentSingleMultiFamily,
  FrontendRentOfficetel,
  FrontendRentApartment,
  FrontendRentMultiHousehold,
} from "../bff/types/rent,types";
const API_URL = "http://localhost:5000/rent/all";

export default function RentPage() {
  type RentData = {
    singleMultiFamily: FrontendRentSingleMultiFamily[];
    officetel: FrontendRentOfficetel[];
    apartment: FrontendRentApartment[];
    multiHousehold: FrontendRentMultiHousehold[];
  };

  const [data, setData] = useState<RentData>({
    singleMultiFamily: [],
    officetel: [],
    apartment: [],
    multiHousehold: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedType, setSelectedType] =
    useState<keyof RentData>("singleMultiFamily");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("네트워크 오류");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(`데이터를 불러오는 중 오류가 발생했습니다.: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>데이터를 불러오는 중...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const categories = {
    singleMultiFamily: "단독/다가구",
    officetel: "오피스텔",
    apartment: "아파트",
    multiHousehold: "다세대주택",
  };

  const rents = data[selectedType as keyof RentData];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">내집(이 될 예정😏) 시세 🏠</h2>

      {/* 탭 버튼 */}
      <div className="flex gap-4 mb-4">
        {Object.keys(categories).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-lg ${
              selectedType === key ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedType(key as keyof RentData)}
          >
            {categories[key as keyof typeof categories]}
          </button>
        ))}
      </div>

      {/* 선택한 타입의 부동산 데이터 표시 */}
      {rents.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rents.map((rent) => (
            <CommonRentItem key={rent.id} rent={rent}>
              <SpecificRentDetails rent={rent} type={selectedType} />
            </CommonRentItem>
          ))}
        </ul>
      )}
    </div>
  );
}

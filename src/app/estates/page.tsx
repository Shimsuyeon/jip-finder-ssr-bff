"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Estate {
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

export default function EstatePage() {
  const [estates, setEstates] = useState<Estate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const response = await fetch("http://localhost:5000/estates");
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다");
        }
        const data: Estate[] = await response.json();
        setEstates(data);
      } catch (error) {
        setError("데이터를 가져오는 중 문제가 발생했습니다.");
        console.error("API 요청 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEstates();
  }, []);

  if (loading) {
    return <p>데이터를 불러오는 중...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">내집(이 될 예정😏) 목록 🏠</h2>
      {estates.length === 0 ? (
        <p>데이터가 없습니다.</p>
      ) : (
        <ul className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {estates.map((estate) => (
              <Link key={estate.id} href={`/estates/${estate.id}`}>
                <li key={estate.id} className="border p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">
                    {estate.location.district}
                  </h3>
                  <h3 className="text-lg font-medium">
                    💰 월세: {estate.price.monthlyRent} / 보증금:{" "}
                    {estate.price.deposit}
                  </h3>
                  <h3 className="text-lg font-medium">
                    🛏️ 면적: {estate.buildingInfo.area}㎡ (
                    {estate.buildingInfo.type})
                  </h3>
                </li>
              </Link>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

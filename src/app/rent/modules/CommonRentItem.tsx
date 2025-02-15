import { FrontendRentBase } from "@/app/bff/types/rent,types";

interface Props {
  rent: FrontendRentBase;
  children?: React.ReactNode; // 특정 유형에 대한 추가 UI
}

export default function CommonRentItem({ rent, children }: Props) {
  return (
    <li className="border p-4 rounded-lg shadow">
      <h3 className="text-xl font-semibold">{rent.location.district}</h3>
      <h3 className="text-lg font-semibold">
        💰 월세: {rent.price.monthlyRent} / 보증금: {rent.price.deposit}
      </h3>
      {children} {/* 개별 속성 UI 삽입 */}
      <p>📅 계약일: {rent.contract.date}</p>
    </li>
  );
}

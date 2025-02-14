import Link from "next/link";
const listings = [
  { id: "1", title: "서울 강남구 아파트", price: "10억 원" },
  { id: "2", title: "부산 해운대 오피스텔", price: "5억 원" },
  { id: "3", title: "대구 수성구 주택", price: "7억 원" }, // 새로운 데이터 추가해도 자동 반영됨
];

export default function ListingPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">내집(이 될 예정) 목록</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listings.map((listing) => (
          <Link key={listing.id} href={`/listing/${listing.id}`}>
            <div className="p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-gray-600">🏡 가격: {listing.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

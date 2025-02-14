import Link from "next/link";

export default function ListingPage() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">개쩌는 집 정보</h2>
      <p className="text-gray-800">더 많은 정보는 곧 업데이트됩니다!</p>
      <Link href="/listing">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
          목록으로 돌아가기
        </button>
      </Link>
    </div>
  );
}

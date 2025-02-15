import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">내집구함🔍</h1>
      <p className="text-gray-700 font-bold mb-6">
        이 넓은 서울 땅에 내 집 하나는 있겠지!
      </p>

      {/* ✅ listing 페이지로 이동하는 버튼 */}
      <Link href="/rent">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition">
          🏡 내집(후보) 시세 확인하기
        </button>
      </Link>
      <br />
    </div>
  );
}

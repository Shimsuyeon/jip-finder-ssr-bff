import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">내집구함</h1>
      <p className="text-gray-700 mb-6">
        이 넓은 서울 땅에 내 집 하나는 있겠지!
      </p>

      {/* ✅ listing 페이지로 이동하는 버튼 */}
      <Link href="/listing">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition">
          매물 리스트 보러가기
        </button>
      </Link>
      <br />
      <Link href="/test">
        <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition">
          API 테스트 중...
        </button>
      </Link>
    </div>
  );
}

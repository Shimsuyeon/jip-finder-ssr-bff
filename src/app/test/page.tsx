"use client";

import { useEffect, useState } from "react";

export default function ListingPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response.ok) {
          throw new Error("네트워크 응답이 실패했습니다");
        }
        const data = await response.json();
        setMessage(data.anything);
      } catch (error) {
        console.error("데이터를 가져오는 중 문제가 발생했습니다:", error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">서버로부터의 메시지</h2>
      <p>{message}</p>
    </div>
  );
}

"use client";

import HotelPage from "@/components/HotelPage";
import { useState } from "react";
import { HotelType } from "@/types/hotel";
import { useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<HotelType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data`);
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return <HotelPage data={data} />;
}

import HotelPage from "@/components/HotelPage";
import { HotelType } from "@/types/hotel";

async function getData(): Promise<HotelType[]> {
  try {
    const response = await fetch(`${process.env.API_URL}/api/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (e) {
    console.error("Fetch error:", e);
    return [];
  }
}

export default async function Home() {
  const data = await getData();
  return <HotelPage data={data} />;
}

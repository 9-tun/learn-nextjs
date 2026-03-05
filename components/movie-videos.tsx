import { json } from "stream/consumers";
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetchinig Videos: ${Date.now()}`);
   await new Promise((resolve) => setTimeout(resolve, 3000));
   throw new Error("Something broke...");
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
}

// Video를 Render하는 전용 함수
export default async function MovieVideos({id}: {id: string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
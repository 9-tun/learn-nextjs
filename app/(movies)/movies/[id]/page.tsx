/**
 * [ 타입스크립트 & Next.js 16 문법 핵심 요약 ]
 * 
 * 1. 콜론 (:) 기준점:
 *    - 왼쪽: 내가 실제로 쓸 '물건' (변수 또는 행동)
 *    - 오른쪽: 그 물건이 어떻게 생겼는지 적힌 '설명서' (타입)
 * 
 * 2. 중괄호 ({ })의 두 얼굴:
 *    - 왼쪽 { params }: '상자 열기' (구조 분해 할당).Props 상자에서 params만 쏙 꺼내는 행위.
 *    - 오른쪽 { params: ... }: '설계도'.이 데이터는 params라는 칸을 가진 객체라고 설명하는 것.
 * 
 * 3. 홑화살표 (< >) 와 Promise:
 *    - < >: '전용 상자'. 박스 안에 어떤 내용물을 담을지 지정하는 입구 (제네릭).
 *    - Promise<...>: '택배 박스'.지금 당장이 아니라 나중에 도착할 데이터임을 의미.
 * 
 * 4. await params:
 *    - Next.js 15+ 규칙: params는 이제 닫힌 택배 상자로 오기 때문에, 반드시 await으로 열어야 함.
 */

import { time } from "console";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Suspense } from "react";


// 옵션1: 병렬 Fetching
// export default async function MovieDetail({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   console.log(`Start Fetching`);
//   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // 동시에 병렬로 Fetching, Promise.all은 결과를 Array로 반환
//   console.log(`End Fetching`);
//   return <h1>{movie.title}</h1>;
// }

interface IParam {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({params}: IParam){
  const {id} = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

// 옵션2: 독립적으로 Fetching
export default async function MovieDetailPage({
  params,
}:  IParam) {
  const {id} = await params;
  return <div>
    
    <Suspense fallback={<h1>Loading Movie Info...</h1>}>
      <MovieInfo id={id} />
    </Suspense>
    
    <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
      <MovieVideos id={id} />
    </Suspense>
  </div>
}
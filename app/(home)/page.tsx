import Link from "next/link";
// 예전 React 방식
// "use client";
// import { useEffect, useState } from "react";

// C언어와 비교
// export = public
// default = main (화면에 보여줄 메인 함수)

// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);

// /**
//  * [ 비동기(Async/Await) 핵심 요약 ]
//  * 
//  * 1. async (비동기 선언): Async (Asynchronous, 비동기) 
//  *    - 동기: 한 번에 하나의 작업만 처리, 순차적으로 실행, 그래서 URL 읽어올 때 시간이 걸리면 멈춤 발생
//  *    - 비동기: 여러 작업을 동시에 처리, 순차적으로 실행하지 않음, 그래서 URL 읽어올 때 시간이 걸려도 멈춤이 발생하지 않음
//  *    - "이 함수는 백그라운드에서 따로 돌아갈 거야"라고 선언하는 것.
//  *    - 덕분에 이 함수가 실행되는 동안에도 웹사이트 전체가 멈추지(Blocking) 않음. (완전 멈춤 방지)
//  * 
//  * 2. await (기다림 명령): 
//  *    - "데이터(fetch)가 올 때까지 이 함수 안의 다음 줄은 실행하지 마!"라고 명령하는 것.
//  *    - 덕분에 비동기 상황에서도 코드를 C언어처럼 순서대로(Sequential) 짤 수 있음.
//  * 
//  * 3. 왜 둘 다 쓰나?: 
//  *    - 자바스크립트의 fetch는 무조건 비동기로만 작동함 (강제 사항).
//  *    - 프로그램 전체는 멈추지 않으면서(async), 우리 코드만 순서대로 기다리게(await) 하려는 목적.
//  * 
//  * 결론: 앱 전체는 멈추지 않게 하되(async), 내 코드 로직은 순서대로(await) 돌아가게 만드는 것
//  */

//   const getMovies = async()=>{
//     // fetch로 URL에서 데이터를 가져옴
//     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     // JSON 형식으로 변환
//     const json = await response.json();  // 데이터를 열고 파싱
//     // 상태 업데이트
//     console.log("Is JSON an Array:", Array.isArray(json));
//     setMovies(json); // json은 배열 안에 중괄호들이 많이 들어있는 형식이다.
//     setIsLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 실행되도록 함
//   return (
//     <div>
//       {isLoading ? "Loading..." : JSON.stringify(movies)}
//     </div>
//   );
// }


// Next.js 방식
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
    title: "Home",
    description: "Home Page",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 백엔드(서버)에서 다 처리 후, 결과만 클라이언트로 보냄
async function getMovies(){
  // await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연 
  const response = await fetch(API_URL);  
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
}

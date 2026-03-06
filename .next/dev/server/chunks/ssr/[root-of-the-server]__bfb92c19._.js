module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/(home)/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(home)/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/styles/movie.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "movie": "movie-module__BWtyzG__movie",
});
}),
"[project]/components/movie.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Movie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$movie$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/movie.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
"use client";
function Movie({ id, poster_path, title }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useRouter"])();
    const onClick = ()=>{
        router.push(`/movies/${id}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$movie$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].movie,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: poster_path,
                alt: title,
                onClick: onClick
            }, void 0, false, {
                fileName: "[project]/components/movie.tsx",
                lineNumber: 20,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/movies/${id}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/movie.tsx",
                lineNumber: 21,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/movie.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
}),
"[project]/styles/home.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "home-module__NoU7wq__container",
});
}),
"[project]/app/(home)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_URL",
    ()=>API_URL,
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$movie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/movie.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/home.module.css [app-rsc] (css module)");
;
;
;
const metadata = {
    title: "Home",
    description: "Home Page"
};
const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// 백엔드(서버)에서 다 처리 후, 결과만 클라이언트로 보냄
async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000)); // 1초 지연 
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
async function HomePage() {
    const movies = await getMovies();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$home$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
        children: movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$movie$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                id: movie.id,
                poster_path: movie.poster_path,
                title: movie.title
            }, movie.id, false, {
                fileName: "[project]/app/(home)/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(home)/page.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(home)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(home)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bfb92c19._.js.map
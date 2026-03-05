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
"[project]/app/(home)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 예전 React 방식
// "use client";
// import { useEffect, useState } from "react";
// export default function Page() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async()=>{
//     // fetch로 URL에서 데이터를 가져옴
//     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
//     // JSON 형식으로 변환
//     const json = await response.json();
//     // 상태 업데이트
//     console.log("Is JSON an Array:", Array.isArray(json));
//     setMovies(json);
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
__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const metadata = {
    title: "Home",
    description: "Home Page"
};
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// 백엔드(서버)에서 데이터를 가져옴
async function getMovies() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}
async function HomePage() {
    const movies = await getMovies();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: JSON.stringify(movies)
    }, void 0, false, {
        fileName: "[project]/app/(home)/page.tsx",
        lineNumber: 45,
        columnNumber: 12
    }, this);
}
}),
"[project]/app/(home)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(home)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__57fc559f._.js.map
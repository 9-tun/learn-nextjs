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
"[project]/app/(movies)/movies/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(movies)/movies/loading.tsx [app-rsc] (ecmascript)"));
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
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
        children: movies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/movies/${movie.id}`,
                    children: movie.title
                }, void 0, false, {
                    fileName: "[project]/app/(home)/page.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, movie.id, false, {
                fileName: "[project]/app/(home)/page.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/(home)/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(movies)/movies/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "default",
    ()=>MovieDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$home$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(home)/page.tsx [app-rsc] (ecmascript)");
;
;
async function getMovie(id) {
    console.log(`Fetchinig Movies: ${Date.now()}`);
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$home$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"]}/${id}`);
    return response.json();
}
async function getVideos(id) {
    console.log(`Fetchinig Videos: ${Date.now()}`);
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$home$292f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_URL"]}/${id}/videos`);
    return response.json();
}
async function MovieDetail({ params }) {
    const { id } = await params;
    console.log(`Start Fetching`);
    const [movie, videos] = await Promise.all([
        getMovie(id),
        getVideos(id)
    ]); // 동시에 병렬로 Fetching, Promise.all은 결과를 Array로 반환
    console.log(`End Fetching`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        children: movie.title
    }, void 0, false, {
        fileName: "[project]/app/(movies)/movies/[id]/page.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
}),
"[project]/app/(movies)/movies/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(movies)/movies/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__28b53c34._.js.map
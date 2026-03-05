// export default: 이 파일의 기본 반환값
import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | Next Movies", // %s 자리에 하위 페이지 제목이 들어감
    default: "Next Movies", // 하위 페이지에별도 제목이 없을 때 보여줄 기본 값
  },
  description: "The best movies on the best framework", // 검색 엔진이 사이트를 설명할 때 쓰는 한 줄 요약
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

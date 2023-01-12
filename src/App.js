import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/header/SearchHeader";

/**
 * * 모바일
 * * 헤더
 * - 설정(다크모드), 전체 스타일링
 *
 * * 메인
 * - 메인페이지
 *    - 비디오 리스트 -> 카드 컴포넌트
 *    - 비디오 리스트 꾸미기
 *    - popular 비디오 요청
 *
 * - 검색페이지
 *    - 검색 결과를 요청
 *
 * - 디테일페이지
 *    - 비디오 재생
 *    - 채널 정보 (아이콘 : 채널 정보 요청)
 *      - description은 자세히, 간략히
 *    - 연관비디오 리스트
 */

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
export default App;

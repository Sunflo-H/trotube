import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";

import SearchVideos from "./pages/SearchVideos";
import Top7Videos from "./pages/Top7Videos";
import RoundVideos from "./pages/RoundVideos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/videos/:keyword",
        element: <SearchVideos />,
      },
      {
        path: "/videos/watch/:videoId",
        element: <VideoDetail />,
      },
      {
        path: "/videos/top7/:memberName",
        element: <Top7Videos />,
      },
      {
        path: "/videos/round/:roundName",
        element: <RoundVideos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
/**
 * 헤더를 항상 보여준다.
 * 메인 페이지 : "/" or "/videos"
 * 검색 후 페이지 : "/videos/:keyword"
 * 디테일 페이지 : "/videos/watch/:videoId"
 */

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

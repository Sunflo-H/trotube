import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/header/SearchHeader";

function App() {
  const queryClient = new QueryClient();
  localStorage.setItem("name", "hbj");
  return (
    <>
      <SearchHeader />
      {/* <div>{localStorage.getItem("name")}</div> */}
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}
export default App;

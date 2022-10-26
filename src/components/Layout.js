import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </>
  );
}

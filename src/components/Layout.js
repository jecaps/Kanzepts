import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import styled from "styled-components";

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

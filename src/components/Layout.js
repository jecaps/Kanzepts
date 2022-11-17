import { Outlet } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import styled from "styled-components";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Main = styled.main`
  margin: 3rem 0;
`;

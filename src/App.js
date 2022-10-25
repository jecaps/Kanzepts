import Header from "./components/Header";
import Nav from "./components/Nav";

import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

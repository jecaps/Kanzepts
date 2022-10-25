import Header from "./components/Header";

import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

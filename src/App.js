import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Plan from "./pages/Plan";
import History from "./pages/History";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="plan" element={<Plan />} />
        <Route path="history" element={<History />} />
      </Routes>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

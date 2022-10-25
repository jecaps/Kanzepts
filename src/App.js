import Header from "./components/Header";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Plan from "./pages/Plan";
import History from "./pages/History";
import Error from "./pages/Error";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="form" element={<Form />} />
        <Route path="plane" element={<Plan />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

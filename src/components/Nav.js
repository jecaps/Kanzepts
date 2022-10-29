import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  FavoritesIcon,
  FormIcon,
  PlanIcon,
  HistoryIcon,
} from "./Icons";
import styled from "styled-components";

export default function Nav() {
  return (
    <Navbar>
      <NavLink to="/" end>
        <HomeIcon />
      </NavLink>
      <NavLink to="favorites">
        <FavoritesIcon />
      </NavLink>
      <NavLink to="/form">
        <FormIcon />
      </NavLink>
      <NavLink to="/plan">
        <PlanIcon />
      </NavLink>
      <NavLink to="/history">
        <HistoryIcon />
      </NavLink>
    </Navbar>
  );
}
const Navbar = styled.nav`
  background-color: #ff9c08;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  width: 100%;

  .active {
    background-color: #7d1100;
  }

  a {
    padding: 1rem;
    width: 100%;
  }

  svg {
    width: 25px;
    fill: #db4200;
  }
`;

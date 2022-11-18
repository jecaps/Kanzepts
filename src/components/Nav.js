import { NavLink, useLocation, useParams } from "react-router-dom";
import { HomeIcon, FavoritesIcon, PlanIcon, HistoryIcon } from "./Icons";
import styled from "styled-components";

export default function Nav() {
  const { id } = useParams();
  const path = useLocation().pathname.slice(1);

  return (
    <Navbar isOnnDetailsPage={id === path}>
      <NavLink to="/" end>
        <HomeIcon />
      </NavLink>
      <NavLink to="favorites">
        <FavoritesIcon />
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
  background-color: #f5f7fa;
  display: ${({ isOnnDetailsPage }) => (isOnnDetailsPage ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-radius: 1.5rem;
  overflow: hidden;
  bottom: 0.75rem;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 10px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);

  .active {
    background-color: #273043;
    border-radius: 1.5rem;
    margin: 0.15rem;

    svg {
      fill: #30cfd0;
    }
  }

  a {
    padding: 0.5rem;
    width: 100%;
  }

  svg {
    width: 1.25rem;
    fill: #273043;
    transition: 0.1s;
  }
`;

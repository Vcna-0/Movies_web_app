import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 719px;
  height: 56px;
  padding: 1.25rem 1rem;
  margin: 0 auto;
  background: #161D2F;

  @media (min-width: 768px) {
    margin-top: 23px;
    border-radius: 10px;
  }

  @media (min-width: 1024px){
    flex-direction: column;
    width: 96px;
    height: 850px;
    margin: 2rem 0 0 2rem;
  }

`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap : 24px;


  @media (min-width: 768px) {
    gap : 32px;
  }

  @media (min-width: 1024px){
    flex-direction: column;
    gap : 40px;
  }
`;

export const StyledSvg = styled.svg`
  &:hover {
    path {
      fill: #FC4747;
    }
  }

  &:focus {
    path {
      fill: #FFF;
    }
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;


export const StyledNavLink = styled(NavLink)`
  &.linkActive {
    path {
        fill: white;
      }
  }
`;


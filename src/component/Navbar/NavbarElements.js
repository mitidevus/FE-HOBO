import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #22252c;
  height: 85px;
  display: flex;
  justify-content: space-between;
  
`;
  
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 50px;
  height: 100%;
  cursor: pointer;
  font-size: larger;
  &.active {
    text-decoration: underline;
    color:white;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

`;
  

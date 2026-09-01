import logo from "@/assets/icons/logo.png";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user.svg";
import heart from "@/assets/icons/heart.svg";
import bag from "@/assets/icons/bag.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      {/* modimal logo */}
      <StyledLogo>
        <img src={logo} alt="modimal-logo" />
      </StyledLogo>

      {/* navlinks */}
      <DropdownContainer>
        <StyledLink to="/new-in">collection</StyledLink>
        <DropdownBox>
          <DropdownItem to="/">lorem</DropdownItem>
          <DropdownItem to="/">lorem</DropdownItem>
          <DropdownItem to="/">lorem</DropdownItem>
          <DropdownItem to="/">lorem</DropdownItem>
          <DropdownItem to="/">lorem</DropdownItem>
        </DropdownBox>
      </DropdownContainer>
    </StyledNavbar>
  );
};

export default Navbar;

const StyledNavbar = styled.nav``;
const StyledLogo = styled.div``;
const StyledLink = styled(Link)``;

const DropdownBox = styled.div`
  display: none;
`;
const DropdownItem = styled(Link)``;

const DropdownContainer = styled.div`
  &:hover ${DropdownBox}{
    display: block;
  }
`;

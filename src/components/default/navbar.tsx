import logo from "@/assets/icons/logo.png";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user.svg";
import heart from "@/assets/icons/heart.svg";
import bag from "@/assets/icons/bag.png";
import colone from "@/assets/images/coll-top-one.png";
import coltwo from "@/assets/images/coll-top-two.png";
import newone from "@/assets/images/new-top-one.png";
import newtwo from "@/assets/images/new-top-two.png";
import newthree from "@/assets/images/new-top-three.png";
import plusone from "@/assets/images/plus-top-one.png";
import plustwo from "@/assets/images/plus-top-two.png";
import plusthree from "@/assets/images/plus-top-three.png";
import sustainone from "@/assets/images/sustain-top-one.png";
import sustaintwo from "@/assets/images/sustain-top-two.png";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "@/constants/colors";

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      {/* modimal logo */}
      <StyledLogo>
        <Link to="/">
          <img src={logo} alt="modimal-logo" />
        </Link>
      </StyledLogo>

      {/* navlinks */}
      <div className="navlinks">
        {/* collection */}
        <DropdownContainer>
          <StyledLink to="/">collection</StyledLink>
          <DropdownBox>
            <div className="collection-items">
              <div className="categories">
                <header>catergory</header>
                <main>
                  <DropdownItem to="/">shop all</DropdownItem>
                  <DropdownItem to="/">blouses & top</DropdownItem>
                  <DropdownItem to="/">pants</DropdownItem>
                  <DropdownItem to="/">dresses & jumpsuits</DropdownItem>
                  <DropdownItem to="/">outwear & jackets</DropdownItem>
                  <DropdownItem to="/">pullovers</DropdownItem>
                  <DropdownItem to="/">tees</DropdownItem>
                  <DropdownItem to="/">shorts & skirts</DropdownItem>
                </main>
              </div>
              <div className="featured">
                <header>featured</header>
                <main>
                  <DropdownItem to="/">new in</DropdownItem>
                  <DropdownItem to="/">modiweek</DropdownItem>
                  <DropdownItem to="/">plus size</DropdownItem>
                  <DropdownItem to="/">best seller</DropdownItem>
                </main>
              </div>
              <div className="more">
                <header>more</header>
                <main>
                  <DropdownItem to="/">bundles</DropdownItem>
                  <DropdownItem to="/">occasion wear</DropdownItem>
                  <DropdownItem to="/">matching set</DropdownItem>
                  <DropdownItem to="/">suiting</DropdownItem>
                </main>
              </div>
            </div>

            <div className="images">
              <div className="image">
                <img src={colone} alt="blouse" />
                <p>blouses</p>
              </div>
              <div className="image">
                <img src={coltwo} alt="plus-size" />
                <p>plus size</p>
              </div>
            </div>
          </DropdownBox>
        </DropdownContainer>

        {/* new in */}
        <DropdownContainer>
          <StyledLink to="/">new in</StyledLink>
          <DropdownBox>
            <div className="collection-items">
              <div className="categories">
                <header>catergory</header>
                <main>
                  <DropdownItem to="/">shop all</DropdownItem>
                  <DropdownItem to="/">top & blouses</DropdownItem>
                  <DropdownItem to="/">tees</DropdownItem>
                  <DropdownItem to="/">pants</DropdownItem>
                  <DropdownItem to="/">jackets & outwears</DropdownItem>
                  <DropdownItem to="/">pullovers</DropdownItem>
                  <DropdownItem to="/">dresses & jumpsuits</DropdownItem>
                  <DropdownItem to="/">shorts & skirts</DropdownItem>
                </main>
              </div>
              <div className="trending">
                <header>trending</header>
                <main>
                  <DropdownItem to="/">plus size</DropdownItem>
                  <DropdownItem to="/">fall collection</DropdownItem>
                  <DropdownItem to="/">modiweek</DropdownItem>
                </main>
              </div>
            </div>

            <div className="images">
              <div className="image">
                <img src={newone} alt="new-image" />
                <p>fall collection</p>
              </div>
              <div className="image">
                <img src={newtwo} alt="new-image" />
                <p>blouses</p>
              </div>
              <div className="image">
                <img src={newthree} alt="new-image" />
                <p>dresses</p>
              </div>
            </div>
          </DropdownBox>
        </DropdownContainer>

        {/* plus size */}
        <DropdownContainer>
          <StyledLink to="/">plus size</StyledLink>
          <DropdownBox>
            <div className="collection-items">
              <div className="categories">
                <header>catergory</header>
                <main>
                  <DropdownItem to="/">shop all</DropdownItem>
                  <DropdownItem to="/">top & blouses</DropdownItem>
                  <DropdownItem to="/">tees</DropdownItem>
                  <DropdownItem to="/">pants</DropdownItem>
                  <DropdownItem to="/">jackets & outwears</DropdownItem>
                  <DropdownItem to="/">pullovers</DropdownItem>
                  <DropdownItem to="/">dresses & jumpsuits</DropdownItem>
                  <DropdownItem to="/">shorts & skirts</DropdownItem>
                </main>
              </div>
            </div>

            <div className="images">
              <div className="image">
                <img src={plusone} alt="plus-image" />
                <p>pants</p>
              </div>
              <div className="image">
                <img src={plustwo} alt="plus-image" />
                <p>dresses</p>
              </div>
              <div className="image">
                <img src={plusthree} alt="plus-image" />
                <p>blouses</p>
              </div>
            </div>
          </DropdownBox>
        </DropdownContainer>

        {/* sustainanility */}
        <DropdownContainer>
          <StyledLink to="/">sustainability</StyledLink>
          <DropdownBox>
            <div className="collection-items">
              <div className="categories">
                <header>sustainability</header>
                <main>
                  <DropdownItem to="/">mission</DropdownItem>
                  <DropdownItem to="/">processing</DropdownItem>
                  <DropdownItem to="/">materials</DropdownItem>
                  <DropdownItem to="/">packaging</DropdownItem>
                  <DropdownItem to="/">product care</DropdownItem>
                  <DropdownItem to="/">our suppliers</DropdownItem>
                </main>
              </div>
            </div>

            <div className="images">
              <div className="image">
                <img src={sustainone} alt="sustain-image" />
                <p>pants</p>
              </div>
              <div className="image">
                <img src={sustaintwo} alt="sustain-image" />
                <p>dresses</p>
              </div>
            </div>
          </DropdownBox>
        </DropdownContainer>
      </div>

      {/* nav icons for other func */}
      <NavFuncIcons>
        <Icon>
          <img src={search} alt="search-icon" />
        </Icon>
        <Icon>
          <img src={user} alt="user-icon" />
        </Icon>
        <Icon>
          <img src={heart} alt="heart-icon" />
        </Icon>
        <Icon>
          <img src={bag} alt="bag-icon" />
        </Icon>
      </NavFuncIcons>
    </StyledNavbar>
  );
};

export default Navbar;


const StyledNavbar = styled.nav`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 80px;
  position: static; 
  z-index: 1000;

  .navlinks {
    display: flex;
    gap: 32px;
    height: 100%;
    align-items: center;
  }
`;

const StyledLogo = styled.div`
  img {
    object-fit: contain;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.deepGray};
  font-weight: 400;
  text-transform: capitalize;
  font-size: 15px;
  padding: 28px 0;
`;

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

const DropdownBox = styled.div`
  position: absolute;
  top: 112px;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  
  display: flex;
  justify-content: space-between;
  padding: 40px 60px 60px 60px;
  background-color: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.03);
  
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 999;

  .collection-items {
    display: flex;
    gap: 80px;
    flex: 1;
  }

  .categories, .featured, .more, .trending {
    display: flex;
    flex-direction: column;
    min-width: 140px;
  }

  header {
    font-weight: 500;
    text-transform: capitalize;
    font-size: 15px;
    margin-bottom: 24px;
    color: ${colors.black};
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 14px; /* Balanced spacing between link categories */
  }

  .images {
    display: flex;
    gap: 24px;
  }

  .image {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Aligns text left below the image matching your blueprint */
    
    img {
      width: 240px; /* Large matching photo proportions */
      height: 320px;
      object-fit: cover;
      background-color: #f7f7f7;
    }
    
    p {
      margin-top: 12px;
      font-size: 14px;
      color: #333333;
      text-transform: capitalize;
    }
  }
`;

const DropdownItem = styled(Link)`
  text-decoration: none;
  color: ${colors.deepGray};
  font-size: 15px;
  text-transform: capitalize;
  white-space: nowrap;
  transition: color 0.15s ease;
  
  &:hover {
    color: #888888; /* Subtle link tracking effect */
  }
`;

const NavFuncIcons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  img {
    width: 20px;
    height: 20px;
  }
`;

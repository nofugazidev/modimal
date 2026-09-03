import React from "react";
import { BiRightArrow, BiCopyright } from "react-icons/bi";
import instagram from "@/assets/icons/instagram.png";
import facebook from "@/assets/icons/facebook.png";
import pinterest from "@/assets/icons/pinterest.png";
import tiktok from "@/assets/icons/tiktok.png";
import chat from "@/assets/icons/chat.png";
import { colors } from "@/constants/colors";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const footLinks = [
    {
      header: "about modimal",
      links: [
        { label: "collection", path: "/" },
        { label: "sustainability", path: "/" },
        { label: "privacy policy", path: "/" },
        { label: "support system", path: "/" },
        { label: "terms & conditions", path: "/" },
        { label: "copyright notice", path: "/" },
      ],
    },

    {
      header: "help & support",
      links: [
        { label: "ordering & shipping", path: "/" },
        { label: "return & refunds", path: "/" },
        { label: "FAQs", path: "/" },
        { label: "contact us", path: "/" },
      ],
    },

    {
      header: "join us",
      links: [
        { label: "modimal club", path: "/" },
        { label: "careers", path: "/" },
        { label: "visit us", path: "/" },
      ],
    },
  ];
  return (
    <Wrapper>
      <TopContainer>
        <LeftContainer>
          <header>join our club, get 15% off for your birthday</header>
          <div className="form">
            <input type="email" placeholder="enter your email address" />
            <BiRightArrow style={{ cursor: "pointer" }} />
          </div>
          <div className="agreement">
            <input type="checkbox" />
            <p>
              By Submitting your email, you agree to receive advertising emails
              from Modimal
            </p>
          </div>
        </LeftContainer>
        <RightContainer>
          {footLinks.map((item, index) => (
            <div key={index}>
              <h4>{item.header}</h4>
              {item.links.map((link, linkIndex) => (
                <div key={linkIndex} id="linkList">
                  <Link to={link.path} id="link">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </RightContainer>
      </TopContainer>
      <BottomContainer>
        <div className="top">
          <div className="social-icons">
            <Link to="/">
              <img src={instagram} alt="socials" />
            </Link>
            <Link to="/">
              <img src={facebook} alt="socials" />
            </Link>
            <Link to="/">
              <img src={pinterest} alt="socials" />
            </Link>
            <Link to="/">
              <img src={tiktok} alt="socials" />
            </Link>
          </div>

          <div className="chat">
            <Link to="/">
              <img src={chat} alt="chat-image" />
            </Link>
          </div>
        </div>

        <div className="bottom">
          <BiCopyright /> <p>{currentYear} Modimal Al Rights Reserved</p>
        </div>
      </BottomContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: ${colors.deepGray};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px;
  color: white;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  header {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 600;
  }

  .form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #ffff;
    padding: 20px;

    & > input {
      background-color: transparent;
      width: 100%;
      outline: none;
      border: none;
      color: white;
    }

    input::placeholder {
      color: ${colors.offWhite};
      text-transform: capitalize;
    }
  }

  .agreement {
    display: flex;
    flex-direction: row;
    gap: 4px;
    color: ${colors.offWhite};

    p {
      font-size: 14px;
    }
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;

  h4 {
    color: white;
    text-transform: capitalize;
  }

  #linkList {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #link {
    color: ${colors.offWhite};
    text-decoration: none;
    text-transform: capitalize;
    margin-top: 14px;
  }
`;
const BottomContainer = styled.div`
  border-top: 1px solid #fff;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;

  .top {
    display: flex;
    justify-content: space-between;

    .social-icons {
      display: flex;
      gap: 10px;
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

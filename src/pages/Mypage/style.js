import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const HeaderList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

export const LogoImg = styled.img`
  height: 30px;
  cursor: pointer;
  position: relative;
  left: 50px;
`;

export const MenuList = styled.div`
  span {
    font-size: 16px;
    cursor: pointer;
    margin: 0 20px 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .myPageMenu {
    color: #ffb800;
  }
`;

export const SideBar = styled.div`
  .readingGlasses {
    font-size: 22px;
    margin-right: 13px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.05);
    }
  }

  .bars {
    font-size: 22px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.05);
    }
  }

  position: relative;
  right: 50px;
`;

export const ContentCenter = styled.div`
  .UserContent {
    width: 35%;
    height: 100%;
    display: flex;
    position: relative;
    left: 90px;
    justify-content: center;
  }
  height: 100%;
  display: flex;
`;

export const UserList = styled.div`
  margin-top: 65px;
  width: 48%;
  background-color: white;
  height: 34vh;
  border-radius: 13px;
`;

export const ArticlesList = styled.div`
  width: 44%;
  height: auto;

  background-color: white;
  border-radius: 13px;
  margin-top: 65px;
`;

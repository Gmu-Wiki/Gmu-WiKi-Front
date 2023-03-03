import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.div`
  width: 100%;
  height: 90px;
  background-color: white;
  position: fixed;
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
`;

export const MenuList = styled.div`
  span {
    font-size: 16px;
    cursor: pointer;
    margin: 0 20px 0 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    &:hover {
      color: #ffb800;
    }
  }
`;

export const SideBar = styled.div`
  .readingGlasses {
    font-size: 22px;
    margin-right: 13px;
    cursor: pointer;
    transition: all 0.2s linear;

    &:hover {
      transform: scale(1.02);
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
`;

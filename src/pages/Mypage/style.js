import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderItem = styled.span`
   color: ${(props) => props.color}; 
 
`;

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
      transition: all 0.1s linear;

      &:hover{
        transform: scale(1.05);
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
  display: flex;
  align-items: center;
  flex-direction: column;

  .UserImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    span {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      position: relative;
    }

    .email {
      color: #b2b2b2;
    }
  }

  .UserImformation {
    margin-top: 13px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;

export const ArticlesList = styled.div`
  width: 44%;
  height: auto;

  background-color: white;
  border-radius: 13px;
  margin-top: 65px;
`;

export const UserImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 3rem;
  cursor: pointer;
`;

export const ButtonList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogOut = styled.button`
  color: #b2b2b2;
  background-color: white;
  border: 1px solid #b2b2b2;
  border-radius: 10px;
  width: 87px;
  height: 35px;
  cursor: pointer;
  margin-right: 4px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ProfileOption = styled.button`
  color: white;
  background-color: #ffb800;
  width: 87px;
  height: 35px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  margin-left: 4px;

  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.03);
  }
`;

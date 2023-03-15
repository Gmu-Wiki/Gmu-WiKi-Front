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
    
    transition: all 0.1s linear;

    &:hover {
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

export const ArticlesList = styled.div`
  width: 44%;
  height: auto;

  background-color: white;
  border-radius: 13px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;

  .setting {
    display: flex;
    justify-content: center;

    width: 100%;
  }

  .writeFont {
    width: 80%;
    height: 50%;
    margin-top: 30px;
    border-bottom: 0.5px solid #b2b2b2;
    display: flex;

    .writtenWriting {
      font-weight: 600;
    }
  }

  .settingWriting {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 0.5px solid #ececec;
  }
  .settingWritingConent {
    display: flex;
    height: 20vh;
    align-items: center;
  }
`;

export const writeList = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .imgSetting {
    display: flex;
    align-items: center;
  }
`;

export const writeImg = styled.img`
  width: 15vh;
  height: 15vh;
  border-radius: 8px;
`;

export const writingContent = styled.div`
  height: 60%;
  margin-bottom: 20px;
  width: 26vw;
  margin-left: 20px;


  .content {
    font-size: 12px;
    color: #a1a1a1;
    font-weight: 500;
  }

  .DateRecommend {
    height: 80%;
    
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .date {
    color: #a1a1a1;
    font-size: 11px;
  }

  .counter {
    font-size: 14px;
    font-weight: 400;
    color: #a1a1a1;
    position: relative;
    bottom: 1px;
  }

  .heart {
    margin-right: 3px;
  }
`;

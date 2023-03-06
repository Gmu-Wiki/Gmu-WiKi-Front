
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import * as S from "../pages/Mypage/style";
import "../pages/Mypage/index.css";




const Header = ({ menu }) => {
  return (
    <>
      <S.Header>
        <S.HeaderList>
          <S.LogoImg src="https://media.discordapp.net/attachments/956190154454876183/1080807476515045376/image.png" />
          <S.MenuList>
            <S.HeaderItem color={menu === "home" ? "#ffb800" : "black"}>홈</S.HeaderItem>
            <S.HeaderItem color={menu === "myPage" ? "#ffb800" : "black"}>마이페이지</S.HeaderItem>
            <S.HeaderItem color={menu === "write" ? "#ffb800" : "black"}>글쓰기</S.HeaderItem>
            <S.HeaderItem color={menu === "notice" ? "#ffb800" : "black"}>공지</S.HeaderItem>
            <S.HeaderItem color={menu === "viewAll" ? "#ffb800" : "black"}>전체보기</S.HeaderItem>
          </S.MenuList>
          <S.SideBar>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="readingGlasses"
            />
            <FontAwesomeIcon icon={faBars} className="bars" />
          </S.SideBar>
        </S.HeaderList>
      </S.Header>
    </>
  );
};

export default Header;

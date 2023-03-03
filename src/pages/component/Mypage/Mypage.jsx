import * as S from "./style";
import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

function MyPage() {
  return (
    <S.Header>
      <S.HeaderList>
        <S.LogoImg src="https://media.discordapp.net/attachments/956190154454876183/1080807476515045376/image.png" />
        <S.MenuList>
          <span>홈</span>
          <span className="myPageMenu">마이페이지</span>
          <span>글쓰기</span>
          <span>공지</span>
          <span>전체보기</span>
        </S.MenuList>
        <S.SideBar>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="readingGlasses"/>
          <FontAwesomeIcon icon={faBars} className="bars"/>
        </S.SideBar>
      </S.HeaderList>
    </S.Header>
  );
}

export default MyPage;

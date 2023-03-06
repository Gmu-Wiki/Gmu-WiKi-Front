import * as S from "./style";
import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Header";

function MyPage() {
  return (
    <>
      <Header menu="viewAll" />
      <S.ContentCenter>
        <div className="UserContent">
          <S.UserList>
            <div className="UserImg">
     0ㅑ         <S.UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMsQAbRYXh_RRV-65pHol_qOnijspiBbwSg&usqp=CAU" />
              <div className="UserImformation">
                <span>2405 김하온</span>
                <span className="email">s22060@gsm.hs.kr</span>
              </div>
            </div>
            <S.ButtonList>
              <S.LogOut>로그아웃</S.LogOut>
              <S.ProfileOption>프로필편집</S.ProfileOption>
            </S.ButtonList>
          </S.UserList>
        </div>
        <S.ArticlesList></S.ArticlesList>
      </S.ContentCenter>
    </>
  );
}

export default MyPage;

import * as S from "../../component/Header/style";
import React, { Component, useState } from "react";
import "../../component/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Header/Header";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { render } from "@testing-library/react";
import MypageItem from "../../component/Header/MypageItem";

function MyPage() {
  return (
    <>
      <Header menu="myPage" />
      <S.ContentCenter>
        <div className="UserContent">
          <S.UserList>
            <div className="UserImg">
              <S.UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMsQAbRYXh_RRV-65pHol_qOnijspiBbwSg&usqp=CAU" />
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
        <S.ArticlesList>
          <div className="setting">
            <div className="writeFont">
              <span className="writtenWriting">내가 작성한 글</span>
            </div>
          </div>
          <S.writeList>
            <MypageItem />
            <MypageItem />
            <MypageItem />
            <MypageItem />
            <MypageItem />
          </S.writeList>
        </S.ArticlesList>
      </S.ContentCenter>
      
    </>
  );
}

export default MyPage;

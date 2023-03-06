import * as S from "./style";
import React, { Component } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../component/Header";

function MyPage() {
  return (
    <>
      <Header h2="#ffb800" />
      <S.ContentCenter>
        <div className="UserContent">
          <S.UserList>

          </S.UserList>
        </div>
        <S.ArticlesList></S.ArticlesList>
      </S.ContentCenter>
    </>
  );
}

export default MyPage;

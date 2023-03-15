import React from "react";
import * as S from "./style";
import Header from "../../component/Header/Header";
import NoticeItem from "../../component/NoticeItem";
import { AiOutlinePlus } from "react-icons/ai";

function Notice() {
  return (
    <>
      <Header menu="notice" />
      <S.NoticeContainer>
        <S.NoticeTitle>공지사항</S.NoticeTitle>
        <S.IconWrap>
          <AiOutlinePlus />
        </S.IconWrap>
        <S.NoticeTitleLine />
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
        
      </S.NoticeContainer>
    </>
  );
}

export default Notice;

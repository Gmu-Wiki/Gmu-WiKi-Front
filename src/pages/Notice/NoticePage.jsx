import React from 'react';
import * as S from './style';
import Header from '../../component/Header';
import { AiOutlinePlus } from 'react-icons/ai';

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
      </S.NoticeContainer>
    </>
  );
}

export default Notice;

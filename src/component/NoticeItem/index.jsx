import React from 'react';
import * as S from './style';

export default function NoticeItem() {
  return (
    <S.NoticeItemContainer>
      <S.NoticeTitle>
        <S.NoticeType>[공지]</S.NoticeType>
        G무위키 사용법에 대해 알려드립니다.
      </S.NoticeTitle>
      <S.NoticeDescription>작성자 : 서주미 | 2023-03-03</S.NoticeDescription>
    </S.NoticeItemContainer>
  );
}

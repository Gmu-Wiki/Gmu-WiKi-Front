import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router";



function WriteItem() {
  return (
    <S.WriteCenter>
      <S.WriteAll>
        <S.WriteTitle>
          <span>제목</span>
          <div className="TitleCenter">
            <S.TitleInput placeholder="제목을 입력해주세요"></S.TitleInput>
          </div>
        </S.WriteTitle>
        <S.WriteContent>
          <span>글 작성</span>
          <div className="InputCenter">
            <S.WriteInput placeholder="내용을 입력해주세요"></S.WriteInput>
          </div>
        </S.WriteContent>
      </S.WriteAll>
    </S.WriteCenter>
  );
}

export default WriteItem;

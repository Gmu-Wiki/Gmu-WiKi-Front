import React from 'react';
import * as S from './style';
import './style.css';

const LoginPage = () => {
  return (
    <>
      <S.Wrapper>
        <S.LoginBlock>
          <S.LoginTitle>LOGIN</S.LoginTitle>
          <S.LoginFrom>
            <S.EmailInput
              placeholder="이메일을 입력해주세요"
              type="email"
            ></S.EmailInput>
            <S.PasswordInput
              placeholder="비밀번호를 입력해주세요"
              type="password"
            ></S.PasswordInput>
            <S.LoginButton>확인</S.LoginButton>
          </S.LoginFrom>
          <S.Links>
            <S.FindPassWord href="#">비밀번호 찾기</S.FindPassWord>
            <S.Join href="#">회원가입 하기</S.Join>
          </S.Links>
        </S.LoginBlock>
    </S.Wrapper>
  </>
  )
}

export default LoginPage;
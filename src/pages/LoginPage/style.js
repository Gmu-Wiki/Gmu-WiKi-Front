import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginBlock = styled.div`
  width: 480px;
  height: 520px;
  
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0 #e5e5ee;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginTitle = styled.div`
  font-size: 44px;
  font-weight: bold;
  color: #ffb800;

  display: flex;
  justify-content: center;
  margin-top: 72px;
`;

export const LoginFrom  = styled.form`
  width: 336px;
  height: 242px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 52px;
`;

export const EmailInput = styled.input`
  width: 318px;
  height: 56px;

  border: solid 1px #999999;
  border-radius: 10px;
  padding-left: 16px;

  font-size: 16px;
`;

export const PasswordInput = styled.input`
  width: 318px;
  height: 56px;

  border: solid 1px #999999;
  border-radius: 10px;
  padding-left: 16px;
  margin-top: 20px;

  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 336px;
  height: 58px;

  border-radius: 10px;
  border: none;
  margin-top: 52px;

  background: #FFB800;
  box-shadow: 0px 2px 4px 0 #F3C997;
  
  font-size: 18px;
  color: #FFFFFF;

  &:hover {
    cursor: pointer;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;

  color: #597bd9;
  font-size: 14px;
`;

export const FindPassWord = styled.a`
  text-decoration: none;
  color: #597bd9;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const Join = styled.a`
  text-decoration: none;
  color: #597bd9;
  font-size: 14px;

  &::after {
    content: "|";
    float: left;
    color: #BEBEBE;
    margin-left: 8px;
    margin-right: 8px;
  }

  &:hover {
    cursor: pointer;
  }

`;




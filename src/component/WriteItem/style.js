import styled from "styled-components";

export const WriteCenter = styled.div`
  width: 1050px;
  height: 70vh;
  background: white;
  border-radius: 16px;
  margin: auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 76px;
  box-shadow: 3px 3px 3px #f1f1f5;
`;

export const WriteAll = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WriteTitle = styled.div`
  margin: 30px 0 0 60px;
  width: 85%;
  height: 8%;
  display: flex;
  align-items: center;

  .TitleCenter {
    margin-left: 30px;
    width: 90%;
    height: 80%;
    background-color: #f1f1f5;
    border-radius: 8px;
    display: flex;
    align-items: center;
  }
  span {
    font-weight: 400;
    font-size: 20px;
    width: 50px;
  }

  .SelectOption{
    margin-left: 40px;
    background-color:#f1f1f5;
    border:none;
    outline:none;
  }
`;

export const TitleInput = styled.input`
  width: 80%;
  height: 50%;
  outline: none;
  border: none;
  background-color: #f1f1f5;
  margin-left: 15px;
  font-size: 20px;
  font-weight: 500;

  ::placeholder {
    font-size: 14px;
  }
`;

export const WriteContent = styled.div`
  height: 43vh;
  width: 85%;
  display: flex;
  margin: 20px 0 0 50px;

  span {
    font-weight: 400;
    font-size: 20px;
    width: 60px;
    margin-top: 15px;
  }

  .InputCenter {
    width: 90%;
    height: 100%;
    background-color: #f1f1f5;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    margin-left: 25px;
  }
`;

export const WriteInput = styled.textarea`
  background-color: #f1f1f5;
  border: none;
  outline: none;
  width: 90%;
  font-size: 14px;
  margin: 20px 45px 0 0;
  resize: none; //왼쪽 아래 3줄 없애는 기능

  ::placeholder {
    font-size: 14px;
  }
`;

export const WriteOption = () => {
  return (
    <select className="SelectOption">
      <option value="introduction">인물 소개</option>
      <option value="schoolIntroduction">학교 시설</option>
      <option value="clubIntroduction">동아리 소개</option>
      <option value="MajorIntroduction">전공 소개</option>
    </select>
  );
};

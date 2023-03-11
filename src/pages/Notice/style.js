import styled from 'styled-components';

export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  background: #fff;
  margin: 75px auto;
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

export const NoticeTitle = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  padding-bottom: 10px;
`;

export const NoticeTitleLine = styled.div`
  width: 100%;
  border-bottom: solid 1px #000;
`;

export const IconWrap = styled.div`
  position: absolute;
  right: 30px;
  top: 85px;
  svg {
    font-size: 25px;
  }
`;

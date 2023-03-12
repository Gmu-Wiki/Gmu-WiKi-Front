import styled from 'styled-components';

export const NoticeItemContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: solid 1px #dedede;
  justify-content: center;
  gap: 10px;
`;

export const NoticeType = styled.span`
  color: #ffb800;
  padding-right: 10px;
  font-size: 20px;
`;

export const NoticeTitle = styled.div`
  width: 100%;
  font-size: 20px;
`;

export const NoticeDescription = styled.div`
  width: 100%;
  color: #999999;
  font-size: 18px;
`;

import * as S from "./style";
import React, { Component, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import Header from "../../component/Header";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { render } from "@testing-library/react";

function MyPage() {
  const [Like, setLike] = useState(false); 
  const [cnt, setCnt] = useState(0);

  const handleLike = () => {

    if(Like === true){
      setLike(false);
      setCnt(prev => prev - 1);
    }else{
      setLike(true);
      setCnt(prev => prev + 1);
    }
  }

  return (
    <>
      <Header menu="myPage" />
        <S.ContentCenter>
        <div className="UserContent">
          <S.UserList>
            <div className="UserImg">
              <S.UserImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMsQAbRYXh_RRV-65pHol_qOnijspiBbwSg&usqp=CAU" />
              <div className="UserImformation">
                <span>2405 김하온</span>
                <span className="email">s22060@gsm.hs.kr</span>
              </div>
            </div>
            <S.ButtonList>
              <S.LogOut>로그아웃</S.LogOut>
              <S.ProfileOption>프로필편집</S.ProfileOption>
            </S.ButtonList>
          </S.UserList>
        </div>
        <S.ArticlesList>
          <div className="setting">
            <div className="writeFont">
              <span className="writtenWriting">내가 작성한 글</span>
            </div>
          </div>
          <S.writeList>
            <div className="settingWriting">
              <div className="settingWritingConent">
                <div className="imgSetting">
                  <S.writeImg src="https://t1.daumcdn.net/cfile/tistory/186E94454F7E700720" />
                </div>
                <S.writingContent>
                  <span>김새미 인성관련 이슈</span>
                  <br />
                  <span className="content">
                    마라탕집에서 꿔바로우 훔쳐 도망.
                  </span>
                  <div className="DateRecommend">
                    <span className="date">1시간 전</span>
                    <div>
                      {Like === true ? <HeartFilled className="heart" onClick={handleLike} style={{ color: 'red', fontSize: '15px'}}/> :  <HeartOutlined className="heart" style={{color: "#a1a1a1"}}onClick={handleLike}/>}
                      <span className="counter">{cnt}</span>
                    </div>
                  </div>
                </S.writingContent>
              </div>
            </div>
            <div className="settingWriting">
              <div className="settingWritingConent">
                <div className="imgSetting">
                  <S.writeImg src="https://t1.daumcdn.net/cfile/tistory/186E94454F7E700720" />
                </div>
                <S.writingContent>
                  <span>김새미 인성관련 이슈</span>
                  <br />
                  <span className="content">
                    마라탕집에서 꿔바로우 훔쳐 도망.
                  </span>
                  <div className="DateRecommend">
                    <span className="date">1시간 전</span>
                    <div>
                      {Like === true ? <HeartFilled className="heart" onClick={handleLike} style={{ color: 'red', fontSize: '15px'}}/> :  <HeartOutlined className="heart" style={{color: "#a1a1a1"}}onClick={handleLike}/>}
                      <span className="counter">{cnt}</span>
                    </div>
                  </div>
                </S.writingContent>
              </div>
            </div>
            <div className="settingWriting">
              <div className="settingWritingConent">
                <div className="imgSetting">
                  <S.writeImg src="https://t1.daumcdn.net/cfile/tistory/186E94454F7E700720" />
                </div>
                <S.writingContent>
                  <span>김새미 인성관련 이슈</span>
                  <br />
                  <span className="content">
                    마라탕집에서 꿔바로우 훔쳐 도망.
                  </span>
                  <div className="DateRecommend">
                    <span className="date">1시간 전</span>
                    <div>
                      {Like === true ? <HeartFilled className="heart" onClick={handleLike} style={{ color: 'red', fontSize: '15px'}}/> :  <HeartOutlined className="heart" style={{color: "#a1a1a1"}}onClick={handleLike}/>}
                      <span className="counter">{cnt}</span>
                    </div>
                  </div>
                </S.writingContent>
              </div>
            </div>
          </S.writeList>
        </S.ArticlesList>
      </S.ContentCenter>
    </>
  );
}

export default MyPage;

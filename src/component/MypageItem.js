import React, { useEffect, useState } from "react";
import * as S from "../pages/MyPage/style";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { render } from "@testing-library/react";

function MypageItem() {
  const [Like, setLike] = useState(false);
  const [cnt, setCnt] = useState(0);
  const [date, setDate] = useState("");

  const handleLike = () => {
    setLike(!Like);
    Like ? setCnt(cnt - 1) : setCnt(cnt + 1);
  };
  //시간 나타내는 기능 https://velog.io/@4775614/React-%EB%82%A0%EC%A7%9C-%EC%8B%9C%EA%B0%84-%EA%B3%84%EC%82%B0-%EB%B0%A9%EA%B8%88%EC%A0%84-%EB%AA%87%EB%B6%84%EC%A0%84-%EB%AA%87%EC%8B%9C%EA%B0%84%EC%A0%84-%EB%AA%87%EC%9D%BC%EC%A0%84-%EB%AA%87%EC%A3%BC%EC%A0%84-%EB%AA%87%EA%B0%9C%EC%9B%94%EC%A0%84
  // const detailDate = (a) => {
  //     const milliSeconds = new Date() - a;
  //     const seconds = milliSeconds / 1000;
  //     if (seconds < 60) return `방금 전`;
  //     const minutes = seconds / 60;
  //     if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  //     const hours = minutes / 60;
  //     if (hours < 24) return `${Math.floor(hours)}시간 전`;
  //     const days = hours / 24;
  //     if (days < 7) return `${Math.floor(days)}일 전`;
  //     const weeks = days / 7;
  //     if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  //     const months = days / 30;
  //     if (months < 12) return `${Math.floor(months)}개월 전`;
  //     const years = days / 365;
  //     return `${Math.floor(years)}년 전`;
  // };

  // //api에 있는 detailPost.createdAt를 바꿔주는 것
  // const nowDate = detailDate(new Date(detailPost.createdAt));

  return (
    <div className="settingWriting">
      <div className="settingWritingConent">
        <div className="imgSetting">
          <S.writeImg src="https://t1.daumcdn.net/cfile/tistory/186E94454F7E700720" />
        </div>
        <S.writingContent>
          <span>김새미 인성관련 이슈</span>
          <br />
          <span className="content">마라탕집에서 꿔바로우 훔쳐 도망.</span>
          <div className="DateRecommend">
            <span className="date detail_time">1시간 전</span>
            <div>
              {Like === true ? (
                <HeartFilled
                  className="heart"
                  onClick={handleLike}
                  style={{ color: "red", fontSize: "15px" }}
                />
              ) : (
                <HeartOutlined
                  className="heart"
                  style={{ color: "#a1a1a1" }}
                  onClick={handleLike}
                />
              )}
              <span className="counter">{cnt}</span>
            </div>
          </div>
        </S.writingContent>
      </div>
    </div>
  );
}

export default MypageItem;

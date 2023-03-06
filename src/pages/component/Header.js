import * as S from "../Mypage/style";
import "../Mypage/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Header = ({ h1, h2, h3, h4, h5 }) => {
  return (
    <>
      <S.Header>
        <S.HeaderList>
          <S.LogoImg src="https://media.discordapp.net/attachments/956190154454876183/1080807476515045376/image.png" />
          <S.MenuList>
            <span
              css={css`
                color: ${h1 ?? "black"};
              `}
            >
              홈
            </span>
            <span
              css={css`
                color: ${h2 ?? "black"};
              `}
            >
              마이페이지
            </span>
            <span
              css={css`
                color: ${h3 ?? "black"};
              `}
            >
              글쓰기
            </span>
            <span
              css={css`
                color: ${h4 ?? "black"};
              `}
            >
              공지
            </span>
            <span
              css={css`
                color: ${h5 ?? "black"};
              `}
            >
              전체보기
            </span>
          </S.MenuList>
          <S.SideBar>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="readingGlasses"
            />
            <FontAwesomeIcon icon={faBars} className="bars" />
          </S.SideBar>
        </S.HeaderList>
      </S.Header>
    </>
  );
};

export default Header;

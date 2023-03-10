import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import * as S from "../pages/Mypage/style";
import "../pages/Mypage/index.css";

const Header = ({ menu }) => {
  const navigate = useNavigate();

  const onClickHeader = (page) => {
    navigate(page);
  };

  return (
    <>
      <S.Header>
        <S.HeaderList>
          <S.LogoImg src="https://media.discordapp.net/attachments/956190154454876183/1080807476515045376/image.png" />
          <S.MenuList>
            <S.HeaderItem
              onClick={() => onClickHeader("/home")}
              color={menu === "home" ? "#ffb800" : "black"}
            >
              홈
            </S.HeaderItem>
            <S.HeaderItem
              onClick={() => onClickHeader("/myPage")}
              color={menu === "myPage" ? "#ffb800" : "black"}
            >
              마이페이지
            </S.HeaderItem>
            <S.HeaderItem
              onClick={() => onClickHeader("/write")}
              color={menu === "write" ? "#ffb800" : "black"}
            >
              글쓰기
            </S.HeaderItem>
            <S.HeaderItem
              onClick={() => onClickHeader("/notice")}
              color={menu === "notice" ? "#ffb800" : "black"}
            >
              공지
            </S.HeaderItem>
            <S.HeaderItem
              onClick={() => onClickHeader("/viewAll")}
              color={menu === "viewAll" ? "#ffb800" : "black"}
            >
              전체보기
            </S.HeaderItem>
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

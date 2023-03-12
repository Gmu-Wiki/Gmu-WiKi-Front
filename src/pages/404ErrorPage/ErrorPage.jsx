import * as S from "./style";
import React from "react";
import Header from "../../component/Header/Header";
import "./index.css";

function ErrorPage() {
  return (
    <>
      <Header />
      <S.CenterImg>
        <S.ErrorImg src="https://cdn.discordapp.com/attachments/996028004021063683/1082980741794779198/G_404.png" />
      </S.CenterImg>
    </>
  );
}

export default ErrorPage;

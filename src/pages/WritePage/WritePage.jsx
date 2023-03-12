import React from "react";
import * as S from "../../component/WriteItem/style";
import Header from "../../component/Header/Header";
import WrtieItem from "../../component/WriteItem/WriteInput";


function WritePage() {
  return (
    <>
      <Header menu="write" />
      <WrtieItem/>
    </>
  );
}

export default WritePage;

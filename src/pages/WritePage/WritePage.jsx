import React from "react";
import * as S from "../../component/WriteItem/style";
import Header from "../../component/Header/Header";
import WriteItem from "../../component/WriteItem/WriteInput";


function WritePage() {
  return (
    <>
      <Header menu="write" />
      <WriteItem/>
    </>
  );
}

export default WritePage;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "../pages/MyPage/Mypage";
import WritePage from "../pages/WritePage/WritePage";
import ErrorPage from "../pages/404ErrorPage/ErrorPage";
import NoticePage from "../pages/Notice/NoticePage.jsx";
import React from "react";

function RouterApp() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />} />
        <Route path="/certificationNumber" element={<CertificationNumber />} />
        <Route path="/join" elemlement={<NoticePage />} />
        <Route path="/viewAllent={<JoinPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/findPasswordPage" element={<FindPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" e" element={<ViewAll />} /> */}

        <Route path="/write" element={<WritePage />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* <Route path="/home" element={<HomePage />}/> */}
        <Route path="/notice" element={<NoticePage />} />
        {/* <Route path="/viewAll" element={<ViewAll />}/>  */}
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;

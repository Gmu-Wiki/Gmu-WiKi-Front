import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import MyPage from "../components/Pages/Mypage/Mypage";

function Router() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />} />
        <Route path="/certificationNumber" element={<CertificationNumber />} />
        <Route path="/joinPage" element={<JoinPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/findPasswordPage" element={<FindPasswordPage />} /> */}
        <Route path="/mypage" element={<MyPage />} />
        {/* <Route path="/writePage" element={<WritePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/noticePage" element={<NoticePage />} />
        <Route path="/viewAll" element={<ViewAll />} /> */}
      </Routes>
    </Router>
  );
}

export default Router;

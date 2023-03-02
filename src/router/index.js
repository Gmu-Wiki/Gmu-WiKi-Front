import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import React from "react";

import MyPage from '../components/Pages/Mypage/Mypage';

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />} />
        <Route path="/certificationNumber" element={<CertificationNumber />} />
        <Route path="/joinPage" element={<JoinPage />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/findPasswordPage" element={<FindPasswordPage />} /> */}
        <Route path="/myPage" element={<MyPage />} />
        {/* <Route path="/writePage" element={<WritePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/noticePage" element={<NoticePage />} />
        <Route path="/viewAll" element={<ViewAll />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;

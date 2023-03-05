import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react"; //테스트
import MyPage from "../pages/Mypage/Mypage";

function RouterApp() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />}/>
            <Route path="/certificationNumber" element={<CertificationNumber />}/>
            <Route path="/joinPage" element={<JoinPage/>}/>
            <Route path="/loginPage" element={<LoginPage />}/>
            <Route path="/findPasswordPage" element={<FindPasswordPage/>}/> */}
             {/* <Route path="/writePage" element={<WritePage />}/>
             <Route path="/homePage" element={<HomePage />}/>
             <Route path="/noticePage" element={<NoticePage/>}/>
             <Route path="/viewAll" element={<ViewAll />}/> */ }
            <Route path="/myPage" element={<MyPage />}/>
            
      </Routes>
    </Router>
  );
}

export default RouterApp;

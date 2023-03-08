import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react"; //테스트
import MyPage from "../pages/Mypage/Mypage";
import ErrorPage from "../pages/404ErrorPage/ErrorPage.jsx";


function RouterApp() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />}/>
            <Route path="/certificationNumber" element={<CertificationNumber />}/>
            <Route path="/join" element={<JoinPage/>}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/findPasswordPage" element={<FindPasswordPage/>}/> */}
             {/* <Route path="/write" element={<WritePage />}/>
             <Route path="/home" element={<HomePage />}/>
             <Route path="/notice" element={<NoticePage/>}/>
             <Route path="/viewAll" element={<ViewAll />}/> */ }
             <Route path="/*" element={<ErrorPage />}/>
            <Route path="/myPage" element={<MyPage />}/>
            
      </Routes>
    </Router>
  );
}

export default RouterApp;

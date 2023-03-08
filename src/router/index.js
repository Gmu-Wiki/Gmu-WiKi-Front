import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react"; //테스트
import MyPage from "../pages/Mypage/Mypage";
<<<<<<< HEAD
import ErrorPage from "../pages/404ErrorPage/ErrorPage.jsx";


=======

>>>>>>> 2bf258540b9bc0145b840db44b26219c812f8aaf
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
<<<<<<< HEAD
             <Route path="/*" element={<ErrorPage />}/>
=======
>>>>>>> 2bf258540b9bc0145b840db44b26219c812f8aaf
            <Route path="/myPage" element={<MyPage />}/>
            
      </Routes>
    </Router>
  );
}

export default RouterApp;

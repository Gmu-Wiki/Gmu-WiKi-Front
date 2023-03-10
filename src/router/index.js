import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react"; //테스트
import MyPage from "../pages/MyPage/Mypage";

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
             <Route path="/viewAll" element={<ViewAll />}/> */}
<<<<<<< HEAD
=======
        <Route path="/*" element={<ErrorPage />} />
>>>>>>> 15f52f2ee5cd36f02587d9a85bf5001df6375faf
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default RouterApp;

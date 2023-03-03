<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function Router() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/emailAuthentication" element={<EmailAuthentication />}/>
            <Route path="/certificationNumber" element={<CertificationNumber />}/>
            <Route path="/joinPage" element={<JoinPage/>}/>
            <Route path="/loginPage" element={<LoginPage />}/>
            <Route path="/findPasswordPage" element={<FindPasswordPage/>}/> */}
        {/* <Route path="/myPage" element={<MyPage />}/>
            <Route path="/writePage" element={<WritePage />}/>
            <Route path="/homePage" element={<HomePage />}/>
            <Route path="/noticePage" element={<NoticePage/>}/>
            <Route path="/viewAll" element={<ViewAll />}/> */}
      </Routes>
    </Router>
  );
}

export default Router;
>>>>>>> 2fb7508e1e36b12c61aa9ddc155262a0e99a2baf

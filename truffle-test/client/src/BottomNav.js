import "./BottomNav.css";
// 사용할 아이콘 import
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNav = () => {

  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className="wrapper">
       <div className = "title">살거래</div>
    {/* 하단 네비게이션 최상위 태그 */}
    <Link to="/" className="nav-link" onClick={() => setActiveNav(1)}>
      <div>
        <h1>거래</h1>
      </div>
    </Link>
    <Link to="/second" className="nav-link" onClick={() => setActiveNav(2)}>
      <div>
        <h1>내 정보</h1>
      </div>
    </Link>
    <Link to="/third" className="nav-link" onClick={() => setActiveNav(3)}>
      <div>
        <h1>물건등록</h1>
      </div>
    </Link>
    <Link to="/login" className="nav-link" onClick={() => setActiveNav(4)}>
      <div>
        <h1>로그인</h1>
      </div>
    </Link>
    <Link to="/register" className="nav-link" onClick={() => setActiveNav(5)}>
      <div>
      <h1>회원가입</h1>
      </div>
    </Link>
  </nav>
);
};


export default BottomNav;
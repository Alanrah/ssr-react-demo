import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/home';
import Profile from '../pages/profile';

const RoutesList = () => {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/profile">个人中心页</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    );
  };

export const routesConfig = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/profile',
      component: Profile,
    },
  ];
  
  export default RoutesList;
  
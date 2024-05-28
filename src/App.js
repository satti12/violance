import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Headerscreen from './components/Headerscreen';
import SideMenu from './components/SideMenu';
import Contentscreen from './components/Contentscreen';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Space } from 'antd';
import Forgetpassword from './components/Forgetpassword';
import Forgetpass2 from './components/Forgetpass2';
import firebase from 'firebase/compat/app';
import './global.css'; // Import global CSS

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Simple auth check
  return isAuthenticated ? children : <Navigate to="/signin" />;
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/Forgetpass2" element={<Forgetpass2/>}/>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="App">
                <Headerscreen />
                <Space className="Sidemenuandpagecontent">
                  <SideMenu />
                  <Contentscreen />
                </Space>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>

  );
}

export default App;

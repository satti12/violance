import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styling/SideMenu.css'

const { Item } = Menu;
function SideMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const handleClick = (e) => {
    navigate(e.key);
  };

  return (
    <div>
      <Menu className="SideMenu" onClick={handleClick} selectedKeys={[selectedKey]} mode="vertical">
        <Item key="/Dashboard" className="menuItem">
          <div className="menuItemContent">
            <img src="image5.png" alt="dashboard" className="images" />
            <span>Dashboard</span>
          </div>
        </Item>
        <Item key="/notification" className="menuItem">
          <div className="menuItemContent">
            <img src="image6.png" alt="notification" className="images" />
            <span>Notification</span>
          </div>
        </Item>
        <Item key="/recording" className="menuItem">
          <div className="menuItemContent">
            <img src="image3.png" alt="recording" className="images" />
            <span>Recording</span>
          </div>
        </Item>
       
      </Menu>
    </div>
  );
}

export default SideMenu;

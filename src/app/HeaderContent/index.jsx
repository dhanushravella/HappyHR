import React from 'react';
import { useState, useEffect } from 'react';
import { useAppContext } from '@/context/appContext';
import { Avatar, Menu, Dropdown, AutoComplete, Input, Breadcrumb } from 'antd';

import {
  AppstoreOutlined,
  MailOutlined,
  LogoutOutlined,
  BellOutlined,
  HomeOutlined,
  FontColorsOutlined,
} from '@ant-design/icons';
import photo from '@/style/images/photo.png';

import history from '@/utils/history';
import uniqueId from '@/utils/uinqueId';

export default function HeaderContent() {
  const { state: stateApp } = useAppContext();
  const { isNavMenuClose, currentActiveMenu } = stateApp;
  const [activity, setActivity] = useState('');
  useEffect(() => {
    console.log('currentActiveMenu', currentActiveMenu);
    if (!currentActiveMenu || currentActiveMenu === '') setActivity('Dashboard');
    if (isNavMenuClose || (currentActiveMenu && currentActiveMenu !== '')) {
      setActivity(window.location.pathname.replace('/', ''));
    }
  }, [isNavMenuClose, currentActiveMenu]);
  const { SubMenu } = Menu;

  const profileDropdown = (
    <div className="profileDropdown whiteBox shadow">
      <div className="pad15">
        <Avatar size="large" className="last" src={photo} style={{ float: 'left' }} />
        <div className="info">
          <p className="strong">{JSON.parse(window.localStorage.auth).name}</p>
          <p>{JSON.parse(window.localStorage.auth).email}</p>
          <p>Role: {JSON.parse(window.localStorage.auth).role}</p>
        </div>
      </div>
      <div className="line"></div>
      <div>
        {/*<Menu>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Role">
            <Menu.Item key="1">Admin</Menu.Item>
            <Menu.Item key="2">HR</Menu.Item>
            <Menu.Item key="3">Employee</Menu.Item>
            <Menu.Item key="4">Supervisor</Menu.Item>
          </SubMenu>
          <Menu.Item key="5" icon={<MailOutlined />}>
            My Calendar
          </Menu.Item>
          <SubMenu key="sub4" icon={<FontColorsOutlined />} title="Language">
            <Menu.Item key="9">English</Menu.Item>
            <Menu.Item key="10">Arabic</Menu.Item>
            <Menu.Item key="11">Hindi</Menu.Item>
            <Menu.Item key="12">Bahasa</Menu.Item>
          </SubMenu>
  </Menu>*/}
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <Menu.Item
            icon={<LogoutOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/logout')}
          >
            logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div className="headerIcon" style={{ display: 'flex' }}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>{activity}</Breadcrumb.Item>
      </Breadcrumb>
      {/*<AutoComplete style={{ width: 350 }}>
        <Input.Search size="medium" placeholder="Type to search" />
  </AutoComplete>*/}
      <div className="rightHeader">
        <Avatar icon={<BellOutlined />} />
        <Avatar icon={<AppstoreOutlined />} />
        <Dropdown overlay={profileDropdown} trigger={['click']} placement="bottomRight">
          <Avatar className="last" src={photo} />
        </Dropdown>
      </div>
    </div>
  );
}

import { BarsOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOrdereList } from '../../features/orders/orderSlide';
import { Context } from '../../store/Context';
import HeaderAccount from './HeaderAccount';
import HeaderCart from './HeaderCart';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import { DrawerMenuTop, HeaderContainer, HeaderMenu } from './style';
import './style.scss';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function MyHeader(props) {
  const navList = ['clothes', 'sport shoes'];
  const loginContext = useContext(Context);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchOrdereList(localStorage.getItem('userId')));
  // }, [dispatch, open]);


  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  const ITEMS_GUEST = [
    getItem('Account', 'sub1', <UserOutlined />, [
      {
        label: <a href="#">Login</a>,
        key: 'Login',
        onClick: () => {
          console.log('login clicked');
        },
      },
      {
        label: <a href="#">Register</a>,
        key: 'Register',
        onClick: () => {
          console.log('register clicked');
        },
      },
    ]),
  ];

  const ITEMS_USER = [
    getItem('Account', 'sub1', <UserOutlined />, [
      {
        label: (
          <a href="#" onClick={e => e.preventDefault()}>
            My profile
          </a>
        ),
        key: 'Login',
        onClick: e => {
          console.log('profile clicked');
        },
      },
      {
        label: (
          <a href="#" onClick={e => e.preventDefault()}>
            Logout
          </a>
        ),
        key: 'Register',
        onClick: e => {
          localStorage.clear();
          loginContext.setIsLogin(false);
          console.log('register clicked');
        },
      },
    ]),
  ];
  return (
    <>
      <HeaderContainer className="desktop-menu">
        <HeaderMenu mode="horizontal">
          <MenuItem className="no-bd">
            <HeaderLogo />
          </MenuItem>
          <MenuItem>
            <Link to={`/`}>
              HOME
            </Link>
          </MenuItem>
          {navList.map((item, index) => (
            <MenuItem key={index} defaultChecked={index === 0 ? true : false}>
              <Link to={`${'/' + item.split(' ').join('')}`}>
                {item.toUpperCase()}
              </Link>
            </MenuItem>
          ))}
        </HeaderMenu>
        <HeaderMenu mode="horizontal" className="header-actions">
          <MenuItem className="no-bd">
            <HeaderSearch />
          </MenuItem>
          <MenuItem className="no-bd">
            <HeaderAccount />
          </MenuItem>
          <MenuItem className="no-bd">
            <HeaderCart />
          </MenuItem>
        </HeaderMenu>
      </HeaderContainer>

      <HeaderContainer className="mobile-menu">
        <HeaderMenu mode="horizontal">
          <MenuItem className="no-bd">
            <HeaderLogo />
          </MenuItem>
          <div
            className="no-bd"
            style={{ display: 'flex', justifyContent: 'end', width: '100%' }}
          >
            <BarsOutlined
              type="primary"
              onClick={showDrawer}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Open
            </BarsOutlined>
          </div>
        </HeaderMenu>
        <DrawerMenuTop placement="top" onClose={onClose} open={open}>
          <HeaderMenu style={{ flexDirection: 'column' }}>
            {navList.map((item, index) => (
              <MenuItem key={index}>
                <a href={`/${item.split(' ').join('')}`}>
                  {item.toUpperCase()}
                </a>
              </MenuItem>
            ))}
            <MenuItem style={{ width: '100%' }}>
              <HeaderSearch />
            </MenuItem>
          </HeaderMenu>
          <Menu
            items={loginContext.isLogin ? ITEMS_USER : ITEMS_GUEST}
            mode="inline"
            theme="light"
            className="header__menu-account"
          />
        </DrawerMenuTop>
      </HeaderContainer>
    </>
  );
}

export default MyHeader;

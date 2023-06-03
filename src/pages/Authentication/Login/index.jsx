import { Button, Checkbox, Col, Input, Modal, Row, Space } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import InputCustom from '../../../components/InputCustom';
import Title from 'antd/es/typography/Title';
import axiosInstance from '../../../shared/services/http-client';
import { Context } from '../../../store/Context';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginContext = useContext(Context);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data } = await axiosInstance.post('auth/local', { identifier: username, password });
      const { jwt, user } = data;
      if (jwt) {
        localStorage.setItem('at', jwt);
        localStorage.setItem('userId', user.id);
        loginContext.setIsLogin(true);
        toast.success('Login successful');
        setTimeout(() => navigate('/'), 1500);
      } else {
        toast.error('Wrong password or account');
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      setUsername('');
      setPassword('');
    }, 1200);

    return () => clearTimeout(debounce);
  }, [username, password]);

  return (
    <Row className="login-page">
      <Col xs={16} lg={6}>
        <Space className="login-form" direction="vertical" size={'large'}>
          <InputCustom
            placeholderStr={'Your email'}
            editType={true}
            name="loginEmail"
            id="loginEmail"
            type="text"
            onChange={e => onChangeUsernameInput(e)}
          />
          <InputCustom
            placeholderStr={'Password'}
            editType={true}
            name="loginEmail"
            id="loginEmail"
            type="password"
            onChange={e => onChangePasswordInput(e)}
          />
          <Checkbox className="btn-remember">Remember me</Checkbox>
          <Button
            block
            className="btn btn-login"
            onClick={() => {
              handleLogin();
            }}
          >
            <span>Login</span>
          </Button>
          <Title level={4} style={{ textAlign: 'center' }}>
            Don't have account yet?
          </Title>
          <Link className="link-register" to="/register">
            Resgister now
          </Link>
        </Space>
      </Col>
      {/* {contextHolder} */}
      <ToastContainer autoClose={1000} />
    </Row>
  );
}

export default Login;
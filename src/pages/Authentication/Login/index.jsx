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
  const [isTyping, setIsTyping] = useState(false);
  const loginContext = useContext(Context);
  const navigate = useNavigate();

  const onChangeUsernameInput = e => {
    setUsername(e.target.value);
    setIsTyping(true);
  };

  const onChangePasswordInput = e => {
    setPassword(e.target.value);
    setIsTyping(true);
  };

  const notifySuccess = () => {
    toast.success('Login successful', {
      closeOnClick: false,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
    });
  };

  const notifyFailure = () => {
    toast.error('Wrong password or account');
  };

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
      <ToastContainer autoClose={1000} />
    </Row>
  );
}

export default Login;
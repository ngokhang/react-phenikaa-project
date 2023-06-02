import React, { useState } from "react";
import { Button, Checkbox, Form } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputCustom from "../../../../components/InputCustom";
import './style.css';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('{{SHIPPING_CART_API}}/auth/local', {
        identifier: username,
        password,
      });

      console.log('Login successful:', response.data);

      navigate('/Homepage');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <InputCustom placeholderStr={'Your email'} editType={true} className='input'/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <InputCustom placeholderStr={'Password'} editType={true} className='input'/>
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox className="remember">Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          LOGIN
        </Button>
        <br />
        <h2 className="hi">Don't have an account yet!</h2>
        <a href="#" className="hai">Register now</a>
      </Form.Item>
    </Form>
  );
}

export default SignIn;

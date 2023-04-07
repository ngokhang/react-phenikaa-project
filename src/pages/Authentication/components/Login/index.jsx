import React from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './style.css'
import InputCustom from "../../../../components/InputCustom";

function Login() {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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
export default Login;
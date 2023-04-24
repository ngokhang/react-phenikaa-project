import { Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import axiosHehe from '../../../../shared/services/http-client';

import InputCustom from '../../../../components/InputCustom';
import ButtonUpdate from '../ButtonUpdate';

ChangePassword.propTypes = {};

function ChangePassword(props) {
  const [newPassword, setNewPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleOnClickUpdate = async e => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setIsPasswordValid(false);
      return;
    }

  };

  const validatePassword = (password) => {
    return password.length >= 8 &&
           /[a-z]/.test(password) &&
           /[A-Z]/.test(password) &&
           /[!@#$%^&*]/.test(password);
  }
  return (
    <Row
      className="change_password"
      style={{ width: '638px', justifyContent: 'flex-start', margin: '0 auto' }}
      gutter={[32, 0]}
    >
      <Col xs={24} sm={24} md={24}>
        <InputCustom
          editType={true}
          placeholderStr={'Current Password'}
          name={'currentPassword'}
          id="currentPasswordInp"
        />
      </Col>
      <Col xs={24} sm={24} md={24}>
        <InputCustom
          editType={true}
          placeholderStr={'New Password'}
          name={'newPassword'}
          id="newPasswordInp"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setIsPasswordValid(true);
          }}
        />
        {!isPasswordValid && (
          <span style={{ color: 'red' }}>
           Mật khẩu phải bao gồm ít nhất 8 ký tự, ít nhất 1 chữ hoa, 1 chữ thường và 1 ký tự đặc biệt
          </span>
        )}
      </Col>
      <Col xs={24}>
        <InputCustom
          editType={true}
          placeholderStr={'Repeat Password'}
          name={'repeatPassword'}
          id="repeatPasswordInp"
        />
      </Col>
      <Col xs={24} md={6}>
        <ButtonUpdate
          handleOnClickUpdate={handleOnClickUpdate}
          title="Are you sure about that ?"
        />
      </Col>
    </Row>
  );
}

export default ChangePassword;

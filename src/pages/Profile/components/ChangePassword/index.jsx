import { Col, Row } from 'antd';
import React, { useState } from 'react';
import InputCustom from '../../../../components/InputCustom';
import axiosInstance from '../../../../shared/services/http-client';
import ButtonUpdate from '../ButtonUpdate';

function ChangePassword(props) {
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUpdateSuccessful, setIsUpdateSuccessful] = useState(false);

  const handleOnChangeCurrentPassword = e => {
    setCurrentPassword(e.target.value);
  };

  const handleOnChangeNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleOnChangePasswordConfirmation = e => {
    setPasswordConfirmation(e.target.value);
  };

  const handleOnClickUpdate = async e => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setIsPasswordValid(false);
      return;
    }
  
    console.log("Check current password: ", currentPassword);
    await axiosInstance.put('auth/change-password', {
      currentPassword,
      password: newPassword,
      passwordConfirmation: newPassword,
    });
  
    setIsUpdateSuccessful(true); // Đánh dấu cập nhật thành công
  };
  

  const validatePassword = password => {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  return (
    <Row
      className="change_password"
      style={{ width: '638px', justifyContent: 'flex-start', margin: '0 auto' }}
      gutter={[32, 0]}
    >
      <Col xs={24} sm={24} md={24}>
        <InputCustom
          type={'password'}
          editType={true}
          placeholderStr={'Current Password'}
          onChange={handleOnChangeCurrentPassword}
          name={'currentPassword'}
          id="currentPasswordInp"
        />
      </Col>
      <Col xs={24} sm={24} md={24}>
        <InputCustom
          type={'password'}
          editType={true}
          placeholderStr={'New Password'}
          name={'newPassword'}
          id="newPasswordInp"
          value={newPassword}
          onChange={handleOnChangeNewPassword}
        />
        {!isPasswordValid && (
          <span style={{ color: 'red' }}>
            Mật khẩu phải bao gồm ít nhất 8 ký tự, ít nhất 1 chữ hoa, 1 chữ
            thường và 1 ký tự đặc biệt
          </span>
        )}
      </Col>
      <Col xs={24}>
        <InputCustom
          type={'password'}
          editType={true}
          placeholderStr={'Repeat Password'}
          name={'repeatPassword'}
          id="repeatPasswordInp"
          value={passwordConfirmation}
          onChange={handleOnChangePasswordConfirmation}
        />
      </Col>
      <Col xs={24} md={6}>
        <ButtonUpdate
          handleOnClickUpdate={handleOnClickUpdate}
          title="Are you sure about that ?"
        />
      </Col>
      {isUpdateSuccessful && (
  <Col xs={24}>
    <span style={{ color: 'green' }}>Change password successful</span>
  </Col>
)}

    </Row>
  );
}

export default ChangePassword;

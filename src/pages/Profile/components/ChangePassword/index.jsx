import { Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import axiosHehe from '../../../../shared/services/my-http';
import './style.scss';
import InputCustom from '../../../../components/InputCustom';
import ButtonUpdate from '../ButtonUpdate';

ChangePassword.propTypes = {};

function ChangePassword(props) {
  const [userData, setUserData] = useState({});
  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickUpdate = async e => {
    e.preventDefault();
    await axiosHehe
      .put(`users/${userData.id}`, userData)
      .then(res => console.log(res));
  };

  useEffect(() => {
    async function fetchDataUser() {
      await axiosHehe
        .get(`users/me`)
        .then(response => setUserData(response))
        .catch(err => console.log(err));
    }
    fetchDataUser();
  }, []);

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
          name={'CurrentPassword'}
          onChange={handleOnChange}
          value={userData.CurrentPassword}
          id="CurrentPasswordInp"
        />
      </Col>
      <Col xs={24} sm={24} md={24}>
        <InputCustom
          editType={true}
          placeholderStr={'New Password'}
          name={'NewPassword'}
          onChange={handleOnChange}
          value={userData.NewPassword}
          id="NewPasswordInp"
        />
      </Col>
      <Col xs={24}>
        <InputCustom
          editType={true}
          placeholderStr={'RepeatPassword'}
          name={'RepeatPassword'}
          onChange={handleOnChange}
          value={userData.RepeatPassword}
          id="RepeatPasswordInp"
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

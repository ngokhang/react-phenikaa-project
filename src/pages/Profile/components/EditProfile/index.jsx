import { Col, Row, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import './style.scss';
import InputCustom from '../../../../components/InputCustom';
import ButtonUpdate from '../ButtonUpdate';
import axiosInstance from '../../../../shared/services/http-client';

EditProfile.propTypes = {};

function EditProfile(props) {
  const [userData, setUserData] = useState({});
  const handleOnChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnClickUpdate = async e => {
    e.preventDefault();
    await axiosInstance
      .put(`users/${userData.id}`, userData)
      .then(res => console.log(res));
  };

  useEffect(() => {
    async function fetchDataUser() {
      await axiosInstance
        .get(`users/me`)
        .then(response => setUserData(response))
        .catch(err => console.log(err));
    }
    fetchDataUser();
  }, []);

  return (
    <Row
      className="update__profile"
      style={{ width: '638px', justifyContent: 'flex-start' }}
      gutter={[32, 0]}
    >
      <Col xs={24} sm={12} md={12}>
        <InputCustom
          editType={true}
          placeholderStr={'Full name'}
          name={'fullname'}
          onChange={handleOnChange}
          value={userData.fullname}
          id="fullNameInp"
        />
        <InputCustom
          editType={true}
          placeholderStr={'Your email'}
          name={'email'}
          isDisabled={true}
          value={userData.email}
          onChange={handleOnChange}
          id="emailInp"
        />
      </Col>
      <Col xs={24} sm={12} md={12}>
        <InputCustom
          editType={true}
          placeholderStr={'Username'}
          name={'username'}
          isDisabled={true}
          value={userData.username}
          onChange={handleOnChange}
          id="usernameInp"
        />
        <InputCustom
          editType={true}
          placeholderStr={'Phone number'}
          name={'phoneNumber'}
          onChange={handleOnChange}
          value={userData.phoneNumber}
          id="phoneNumInp"
        />
      </Col>
      <Col xs={24}>
        <InputCustom
          editType={true}
          placeholderStr={'Address'}
          name={'address'}
          onChange={handleOnChange}
          value={userData.address}
          id="addressInp"
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

export default EditProfile;

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

InputCustom.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholderStr: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};

function InputCustom(props) {
  const {
    name,
    type,
    onChange,
    placeholderStr,
    id,
    value,
    editType,
    isDisabled,
  } = props;
  return (
    <div class="holder" xs={24}>
      <input
        name={name}
        type={type}
        id={id}
        onChange={onChange && (e => onChange(e))}
        value={value && value}
        disabled={isDisabled && true}
        placeholder={!editType && placeholderStr}
        required
      />
      {editType && (
        <div class="pholder">
          {placeholderStr} {editType && <span>*</span>}
        </div>
      )}
      {!editType && (
        <Button block>
          <SearchOutlined />
        </Button>
      )}
    </div>
  );
}

export default InputCustom;

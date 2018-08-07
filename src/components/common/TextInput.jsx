import React from 'react';

const TextInput = (props) => {
  const { innerRef, value, onChange, type, ...rest } = props;

  return (
    <input
      {...rest}
      onChange={onChange}
      ref={innerRef}
      type={type || 'text'}
      value={value}
    />
  );
};

TextInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default TextInput;

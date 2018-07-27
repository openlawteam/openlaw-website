import React from 'react';

const TextInput = (props) => {
  const { value, onChange, ...rest } = props;

  return (
    <input
      {...rest}
      onChange={onChange}
      type="text"
      value={value}
    />
  );
};

TextInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default TextInput;

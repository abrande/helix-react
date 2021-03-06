import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

const TextArea = ({ id, label, className, required, optional, children, style, ...rest }) => {
  return (
    <hx-textarea-control class={className} style={style}>
      <textarea {...rest} id={id} required={required} />
      <label
        className={classnames({
          hxOptional: optional,
          hxRequired: required,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      {children}
    </hx-textarea-control>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  optional: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;

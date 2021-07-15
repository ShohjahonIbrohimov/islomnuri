import React from "react";

const Radio = ({
  options,
  name,
  option_styles,
  wrap_style,
  register,
  block_style,
  radio_class,
}) => {
  return (
    <div
      className={`d-flex radio_options_wrapper ${radio_class}`}
      style={wrap_style}
    >
      {options.map((o) => (
        <div key={o.id} className="radio_block" style={block_style}>
          <input
            ref={register({})}
            type="radio"
            name={name}
            value={o.value}
            id={o?.id}
          />
          <label
            style={option_styles}
            htmlFor={o.id}
            className="radio_label d-flex align-center h-100"
          >
            <span>{o.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;

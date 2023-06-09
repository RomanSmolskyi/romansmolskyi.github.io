import React from "react";
import "./Input.css";

interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  placeholder: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAutoFocus?: boolean;
  onKeyDown?: (e: any) => void;
}

export const Input = ({
  placeholder,
  value,
  isAutoFocus,
  onChange,
  onKeyDown,
  ...rest
}: IInputProps): JSX.Element => {
  return (
    <input
      autoFocus={isAutoFocus}
      type="text"
      placeholder={placeholder}
      className="input"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
};

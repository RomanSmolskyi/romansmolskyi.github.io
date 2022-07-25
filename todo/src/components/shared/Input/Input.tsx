import React, { useRef } from "react";
import "./Input.css";

interface IInputProps {
  placeholder: string;
  value: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAutoFocus?: boolean;
  onKeyDown?: (e: any) => void;
  onKeyPress?: (e: any) => void;
}

export const Input = ({
  placeholder,
  value,
  isAutoFocus,
  onChange,
  onKeyDown,
  onKeyPress,
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
      onKeyPress={onKeyPress}
    />
  );
};

import React from "react";
import clsx from "clsx";
import "./Button.css";

interface IButtonProps {
  placeholder: string | React.ReactElement<any, any>;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  isPrimary?: boolean;
}

export const Button = ({
  placeholder,
  onClick,
  className,
  isPrimary = false,
  disabled = false,
}: IButtonProps): JSX.Element => (
  <button
    className={clsx(
      isPrimary
        ? clsx("primary-btn", className)
        : clsx("secondary-btn", className)
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {placeholder}
  </button>
);

// className = 'add-btn';

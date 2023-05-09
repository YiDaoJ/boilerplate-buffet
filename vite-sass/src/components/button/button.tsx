import { PropsWithChildren } from 'react';
import './style.scss';

type ColorType = 'primary' | 'secondary' | 'warning' | 'danger';

interface ButtonProps {
  color: ColorType;
  onClick?(): void;
}

export const Button: PropsWithChildren<ButtonProps> = ({
  children,
  color,
  onClick,
}) => {
  return (
    <button color={color} onClick={onClick} className={`button--${color}`}>
      {children}
    </button>
  );
};

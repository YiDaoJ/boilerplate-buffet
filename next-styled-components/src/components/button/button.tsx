import { PropsWithChildren } from 'react';
import styled, {
  DefaultTheme,
  ThemedCssFunction,
  css,
} from 'styled-components';

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
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const getColor = (color?: ColorType): ThemedCssFunction<DefaultTheme> => {
  switch (color) {
    case 'secondary':
      return css`
        color: #5e5c64e6;
      `;
    case 'danger':
      return css`
        background: #dc3545e6;
        color: #e4ebf5e6;
      `;
    case 'warning':
      return css`
        background: #ffca2ce6;
        color: #5e5c64e6;
      `;
    case 'primary':
    default:
      return css`
        background: #6d5dfc;
        color: #e4ebf5e6;
      `;
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  border: none;

  font-size: 1.25rem;

  ${({ color }) => getColor(color)};
`;

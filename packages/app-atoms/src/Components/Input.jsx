import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const InputStyled = styled(
  React.forwardRef(({ size, theme, ...otherProps }, forwardedref) => (
    <input ref={forwardedref} {...otherProps} />
  ))
)`
  ${({ theme, ...props }) => css`
    ${() => {
      const spacing = {
        topBottom: 2,
        leftRight: 3,
        ...(props.size === "small" && { topBottom: 1, leftRight: 2 }),
        ...(props.size === "large" && { topBottom: 3, leftRight: 4 }),
      };
      return css`
        padding: ${theme.space[spacing.topBottom]}rem
          ${theme.space[spacing.leftRight]}rem;
      `;
    }}
    font-size: ${theme.fontSizes[props.size]}rem;
    font-weight: ${theme.fontWeights.normal};
    line-height: ${theme.lineHeights.body}rem;
    color: ${theme.colors.darkText};
    border: ${theme.borders.medium} ${theme.colors.borderColor};
    border-radius: ${theme.radii.base};
    transition: ${theme.transition(200)};
    background-color: ${theme.colors.white};
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:focus-visible,
    &[data-focus-visible] {
      background-color: ${theme.colors.neutral};
      border: ${theme.borders.medium} ${theme.colors.secondary};
    }
    ${isSafari &&
    css`
      &:focus {
        background-color: ${theme.colors.neutral};
        border: ${theme.borders.medium} ${theme.colors.secondary};
      }
    `}
    &:disabled, 
    &[aria-disabled="true"] {
      background-color: ${theme.colors.secondary100};
    }
  `}
`;

const Input = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <InputStyled {...props} innerRef={forwardedRef}>
      {children}
    </InputStyled>
  );
});

Input.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  theme: PropTypes.shape({}),
};
Input.defaultProps = {
  size: "medium",
  theme: atomTheme,
};
export { Input };

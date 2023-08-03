import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const sharedStyle = css`
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  line-height: 1;
  text-decoration: none;
`;

const ButtonBaseWithStyle = styled.button`
  ${sharedStyle}
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
`;

const ButtonBase = React.forwardRef((props, forwardedRef) => {
  return (
    <ButtonBaseWithStyle {...props} innerRef={forwardedRef}>
      {props.children}
    </ButtonBaseWithStyle>
  );
});

// dynamic styling of our versatile button
const ButtonWithStyle = styled(
  React.forwardRef(
    (
      {
        color,
        fontWeight,
        variant,
        rounded,
        padding,
        size,
        theme,
        ...otherProps
      },
      fref
    ) => <ExternalButton ref={fref} {...otherProps} />
  )
)`
  ${(props) => applyButtonStyling(props)}
`;

const Button = React.forwardRef((props, forwardedRef) => {
  return (
    <ButtonWithStyle {...props} innerRef={forwardedRef}>
      {props.children}
    </ButtonWithStyle>
  );
});

/* Special Purpose Buttons */
const ButtonAnchor = ({ children, ...otherProps }) => {
  return (
    <Button variant="text" padding="none" {...otherProps}>
      {children}
    </Button>
  );
};

const ButtonIconStyle = styled(Button)`
  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => `${theme.fontSizes.smaller}rem`};
  ${({ theme, ...props }) =>
    !(props.variant === "text" || props.variant === "contained") &&
    css`
      color: ${theme.colors.secondary};
      background-color: ${theme.colors.neutral};
      border: ${theme.borders.medium} ${theme.colors.neutral};
    `};
`;

const ButtonIcon = React.forwardRef(({ children, ...props }, forwardRef) => {
  return (
    <ButtonIconStyle {...props} innerRef={forwardRef}>
      {children}
    </ButtonIconStyle>
  );
});

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "neutral",
    "error",
    "success",
  ]),
  hoverColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "neutral",
    "error",
    "success",
  ]),
  fontWeight: PropTypes.oneOf(["light", "normal", "semibold", "bold"]),
  rounded: PropTypes.oneOf(["none", "base", "pill"]),
  padding: PropTypes.oneOf(["none", "normal"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  theme: PropTypes.shape({}),
};

Button.defaultProps = {
  disabled: false,
  children: "",
  onClick: () => {},
  variant: "contained",
  color: "primary",
  rounded: "base",
  padding: "normal",
  size: "medium",
  fontWeight: "semibold",
  theme: atomTheme,
};

ButtonIcon.propTypes = {
  "aria-label": PropTypes.string.isRequired,
  ...Button.propTypes,
};

ButtonIcon.defaultProps = {
  ...Button.defaultProps,
  color: "secondary",
  variant: "outlined",
};

export {
  Button, // Standard themed button
  ButtonBase, // Unthemed Button
  ButtonAnchor, // Button that has styling similar to anchor
  ButtonIcon, // button with only icon
};

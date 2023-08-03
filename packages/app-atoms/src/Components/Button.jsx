import PropTypes from "prop-types";
import styled from "styled-components";

const colorsMap = {
  primary: "#000080",
  secondary: "#ff8000",
  warning: "#c83200",
  information: "#03A89e",
};

const StyledButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => {
    switch (props.variant) {
      case "outline":
        return "white";
      case "text":
        return "transparent";
      case "disabled":
        return "gray";
      case "link":
        return "transparent";
      default:
        return colorsMap[props.color];
    }
  }};
  color: ${(props) => {
    switch (props.variant) {
      case "outline":
        return colorsMap[props.color];
      case "text":
        return colorsMap[props.color];
      case "disabled":
        return "white";
      case "link":
        return colorsMap[props.color];
      default:
        return "white";
    }
  }};
  border: ${(props) => {
    switch (props.variant) {
      case "outline":
        return `2px solid ${colorsMap[props.color]}`;
      case "text":
        return "none";
      case "disabled":
        return "2px solid gray";
      case "link":
        return "none";
      default:
        return "none";
    }
  }};
  font-weight: ${(props) => (props.variant === "text" ? "bold" : "normal")};
  cursor: ${(props) =>
    props.variant === "disabled" ? "not-allowed" : "pointer"};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "12px";
      case "medium":
        return "16px";
      case "large":
        return "20px";
      case "xl":
        return "24px";
      default:
        return "16px";
    }
  }};
`;

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.propTypes = {
  variant: PropTypes.oneOf(["solid", "outline", "text", "disabled", "link"]),
  color: PropTypes.oneOf(["primary", "secondary", "warning", "information"]),
  size: PropTypes.oneOf(["small", "medium", "large", "xl"]),
  children: PropTypes.string,
};

Button.defaultProps = {
  variant: "solid",
  color: "primary",
  size: "medium",
};

export { Button };

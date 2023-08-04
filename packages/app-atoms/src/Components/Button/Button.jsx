import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles";

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

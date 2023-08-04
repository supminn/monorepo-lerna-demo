import PropTypes from "prop-types";
import { StyledInput, StyledTextArea } from "./Input.styles";

function Input(props) {
  return props.mutliLine ? (
    <StyledTextArea {...props} />
  ) : (
    <StyledInput {...props} />
  );
}

Input.propTypes = {
  mutliLine: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Input.defaultProps = {
  mutliLine: false,
  size: "medium",
};

export { Input };

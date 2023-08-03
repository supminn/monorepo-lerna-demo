import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.9);
  width: 100%;
  display: inline-block;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.9);
  cursor: ${(props) => (props.cursorStyle ? "not-allowed" : "text")};
  font-size: 1rem;
  font-family: inherit;
  height: 4rem;
  margin: 0;
  padding: 0;
  resize: none;
  outline: none;
  width: 90%;
`;
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
  submitHandler: PropTypes.func,
  hideButton: PropTypes.bool,
};

Input.defaultProps = {
  mutliLine: false,
  size: "medium",
  submitHandler: () => {},
  hideButton: false,
};

export { Input };

import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  background-color: transparent;
  border: 2px solid #000080;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 0.9);
  font-family: inherit;
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
  width: ${(props) => {
    switch (props.size) {
      case "small":
        return "60%";
      case "medium":
        return "70%";
      case "large":
        return "80%";
      case "xl":
        return "100%";
      default:
        return "70%";
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "3rem";
      case "medium":
        return "5rem";
      case "large":
        return "7rem";
      case "xl":
        return "9rem";
      default:
        return "5rem";
    }
  }};
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px solid #000080;
  border-radius: 0.5rem;
  color: rgba(0, 0, 0, 0.9);
  cursor: ${(props) => (props.cursorStyle ? "not-allowed" : "text")};
  font-family: inherit;
  margin: 0.5rem;
  padding: 0.5rem;
  resize: none;
  outline: none;
  width: 90%;
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

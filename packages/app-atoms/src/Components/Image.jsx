import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.img`
  height: auto;
  margin: 0.5rem;
  width: ${(props) => {
    switch (props.size) {
      case "xs":
        return "2rem";
      case "small":
        return "4rem";
      case "medium":
        return "8rem";
      case "large":
        return "12rem";
      case "xl":
        return "16rem";
      default:
        return "8rem";
    }
  }};
`;
function Image({ src, title, size }) {
  return <StyledImage src={src} alt={title} size={size} />;
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};

export { Image };

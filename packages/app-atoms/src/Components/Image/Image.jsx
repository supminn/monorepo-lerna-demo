import PropTypes from "prop-types";
import { StyledImage } from "./Image.styles";

function Image({ src, title, size }) {
  return <StyledImage src={src} alt={title} size={size} />;
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
};

export { Image };

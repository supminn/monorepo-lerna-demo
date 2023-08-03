import PropTypes from "prop-types";

function Image(props) {
  return <img src={props.src} alt={props.title} />;
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

export default Image;

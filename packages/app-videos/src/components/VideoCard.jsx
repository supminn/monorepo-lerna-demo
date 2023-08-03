import { Image, Typography } from "app-atoms";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 1px solid #000080;
  width: 20rem;
  justify-content: center;
  align-items: center;
  background-color: #ff800055;
  cursor: pointer;
`;

function VideoCard({ data }) {
  const { id, title } = data;

  return (
    <Link to={`/${id}`}>
      <Container>
        <Image
          size="xl"
          src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
          alt={title}
        />
        <Typography variant={"h6"} style={{ padding: "0 0.5rem" }}>
          {title}
        </Typography>
      </Container>
    </Link>
  );
}

VideoCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

export { VideoCard };

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { videos } from "../data";
import { Button, Typography } from "app-atoms";

const Container = styled.section`
  margin: 1rem;
`;

function VideoDetails() {
  const { videoId } = useParams();
  const videoDetails = videos.find((video) => video.id === videoId);
  if (!videoDetails) {
    return null;
  }
  const { title, channel } = videoDetails;
  return (
    <Container>
      <div>
        <Link to="/">
          <Button color={"secondary"}>Back</Button>
        </Link>
      </div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Typography variant={"sectionTitle"}>{title}</Typography>

      <Typography variant={"subtitle"}>Created by: {channel}</Typography>
    </Container>
  );
}

export { VideoDetails };

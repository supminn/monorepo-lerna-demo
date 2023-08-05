import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { playlistVideos, videos } from "../data";
import { Button, Typography } from "app-atoms";

const Container = styled.section`
  margin: 1rem;
`;

function VideoDetails() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }
  const videoDetails = [...videos, ...playlistVideos].find(
    (video) => video.id === videoId
  );
  if (!videoDetails) {
    return null;
  }
  const { title, channel } = videoDetails;
  return (
    <Container>
      <div>
        <Button color={"secondary"} onClick={goBack}>
          Back
        </Button>
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

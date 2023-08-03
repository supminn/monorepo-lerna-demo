import { Typography } from "app-atoms";
import styled from "styled-components";
import { videos } from "../data";
import { VideoCard } from "./VideoCard";

const FlexContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;
`;

function VideoList() {
  return (
    <>
      <Typography variant="sectionTitle">MonoRepo Videos</Typography>
      <FlexContainer>
        {videos.map((video) => (
          <VideoCard key={video.id} data={video} />
        ))}
      </FlexContainer>
    </>
  );
}

export { VideoList };

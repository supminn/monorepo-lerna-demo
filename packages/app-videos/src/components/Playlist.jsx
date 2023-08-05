import { Typography } from "app-atoms";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { VideoCard } from "./VideoCard";
import { playlistVideos, videos } from "../data";
import { useNavigate } from "react-router-dom";

function Playlist() {
  const { username } = useSelector((state) => state.auth.login);
  const navigate = useNavigate();
  if (!username) {
    navigate("/");
    return (
      <Container>
        <Typography variant={"h2"}>
          Please sign in to use this feature!
        </Typography>
      </Container>
    );
  }
  return (
    <>
      <Container>
        <Typography
          variant={"sectionTitle"}
          style={{ textDecoration: "underline" }}>
          Watch later
        </Typography>
        <GridContainer>
          {videos
            .filter((video) => video.showUser)
            .map((video) => (
              <VideoCard key={video.id} data={video} />
            ))}
        </GridContainer>
      </Container>
      <Container>
        <Typography
          variant={"sectionTitle"}
          style={{ textDecoration: "underline" }}>
          {username}
          {"'"}s Playlist
        </Typography>
        <GridContainer>
          {playlistVideos.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </GridContainer>
      </Container>
    </>
  );
}

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;
`;

const Container = styled.div`
  margin: 1rem;
`;
export { Playlist };

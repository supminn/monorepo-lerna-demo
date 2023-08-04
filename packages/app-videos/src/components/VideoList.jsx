import { Typography } from "app-atoms";
import styled from "styled-components";
import PropTypes from "prop-types";
import { videos } from "../data";
import { VideoCard } from "./VideoCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoList, startLoadingVideo } from "../store/videoSlice";

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1rem;
`;

function VideoList({ username }) {
  const dispatch = useDispatch();
  const { videos: videoList, videoLoading } = useSelector(
    (state) => state.videos
  );
  // TODO: test this logic
  const filteredList = username
    ? videoList.filter((item) => item.showUser)
    : videoList;
  // const { username: loginUser } = useSelector((state) => state.auth.login);
  // TODO: handle logout state on /playlist

  useEffect(() => {
    if (filteredList.length === 0) {
      dispatch(startLoadingVideo());
      setTimeout(() => dispatch(setVideoList(videos)), 1000);
    }
  }, [filteredList, dispatch]);

  return (
    <>
      <Typography variant="sectionTitle">
        MonoRepo Videos {username && `for ${username}`}
      </Typography>
      {videoLoading ? (
        <Typography variant={"subtitle"}>Loading...</Typography>
      ) : (
        <GridContainer>
          {videoList.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </GridContainer>
      )}
    </>
  );
}

VideoList.propTypes = {
  username: PropTypes.string,
};

export { VideoList };

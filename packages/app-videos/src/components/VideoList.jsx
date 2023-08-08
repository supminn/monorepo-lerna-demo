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

function VideoList() {
  const dispatch = useDispatch();
  const { videos: videoList, videoLoading } = useSelector(
    (state) => state.videos
  );

  useEffect(() => {
    if (videoList.length === 0) {
      dispatch(startLoadingVideo());
      setTimeout(() => dispatch(setVideoList(videos)), 1000);
    }
  }, [videoList, dispatch]);

  return (
    <>
      <Typography variant="sectionTitle">MonoRepo Videos</Typography>
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

import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    loading: false,
  },
  reducers: {
    startLoadingVideo: (state) => {
      state.loading = true;
    },
    setVideoList: (state, action) => {
      state.videos = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoadingVideo, setVideoList } = videoSlice.actions;
export default videoSlice.reducer;

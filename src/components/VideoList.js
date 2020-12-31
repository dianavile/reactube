import React from 'react';
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => { 
    const renderedVideos = videos.map((video, id) =>(
    <VideoItem
      handleVideoSelect={handleVideoSelect}
      key={id}
      video={video}
    />
    ));
    return (
      <Grid container spacing={10}>
        {renderedVideos}
      </Grid>
  );
}

export default VideoList;

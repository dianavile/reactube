import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({video, onVideoSelect }) => { 
    return (
        <Grid item xs={12}>
            <Paper
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
                onClick={() => onVideoSelect(video)} >
                <img 
                    width={200}
                    height={180}
                    style={{ paddingLeft: "8px", paddingTop: "8px", marginRight: "8px" }}
                    alt="thumbnail"
                    src={video.snippet.thumbnails.medium.url}
                />
                <Typography variant="subtitle1">
                    <div>{video.snippet.title}</div>
                </Typography>
            </Paper>
        </Grid>
        );
    }

export default VideoItem;



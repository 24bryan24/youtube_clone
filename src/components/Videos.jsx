import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

const Videos = ({ videos, classNames, linearGradient, direction }) => {
  console.log("inside videos jsx", videos);
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && (
              <VideoCard
                video={item}
                classNames={classNames}
                linearGradient={linearGradient}
              />
            )}
            {item.id.channelId && (
              <ChannelCard channelDetail={item} classNames={classNames} />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

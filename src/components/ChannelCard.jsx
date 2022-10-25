import React, { useRef } from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoProfilePicture,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";
const numWCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ChannelCard = ({ channelDetail, marginTop }) => {
  const myRef = useRef();

  console.log(channelDetail?.snippet?.thumbnails?.high?.url);

  console.log(
    parseInt(
      channelDetail?.statistics?.subscriberCount.toLocaleString(
        navigator.language,
        { minimumFractionDigits: 2 }
      )
    )
  );
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "245px" },
        height: "326px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {channelDetail && (
            <CardMedia
              ref={myRef}
              image={
                channelDetail.snippet.thumbnails.high.url || demoProfilePicture
              }
              alt={channelDetail?.snippet?.title}
              sx={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                mb: 2,
                border: "1px dotted #e3e3e3",
              }}
            />
          )}
          <Link
            to={
              channelDetail?.id?.channelId
                ? `/channel/${channelDetail?.id?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="h6" fontWeight="bold" color="#FFF">
              {channelDetail?.snippet?.title.slice(0, 60) ||
                demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography variant="subtitle2" color="gray">
                {numWCommas(channelDetail?.statistics?.subscriberCount)}{" "}
                Subscribers
              </Typography>
            )}
          </Link>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
// import { useWindowScrollPosition } from "./useWindowScrollPosition.jsx";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  console.log(channelDetail, videos);

  // const { scrollX, scrollY } = useWindowScrollPosition();

  const linearGradient = `${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)}`;

  // console.log(linearGradient);
  // 9,91,121

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  //

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: "rgb(2,0,36)",
            background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,91,121,1) 0%, rgba(${linearGradient},1) 87%)`,
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box
        p={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        // style={{
        //   display: "flex",
        //   // justifyontent: "center",
        //   alignItems: "center",
        // }}
      >
        {/* <Box sx={{ mr: { sm: "100px" } }} /> */}
        <Videos
          videos={videos}
          classNames="videoCard"
          linearGradient={linearGradient}
        ></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;

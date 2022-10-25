import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { SideBar, Videos } from "./index";

const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
  //     setVideos(data.items)
  //   );
  // }, [selectedCategory]);

  console.log(videos);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 BH Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Search Results for
          <span style={{ color: "#F31503" }}> {searchTerm} </span>
          videos
        </Typography>
        {videos && <Videos videos={videos} />}
      </Box>
    </Stack>
  );
};

export default SearchFeed;

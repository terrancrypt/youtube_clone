import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sc={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ color: "white", marginLeft: "15px" }}
      >
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
        <span
          style={{
            color: "#F31503",
          }}
        >
          {" "}
          videos
        </span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;

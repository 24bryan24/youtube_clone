import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Paper, IconButton, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import { styled } from "@mui/system";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const myRef = useRef();
  const navigate = useNavigate();

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // myRef.current.value = "";
    if (searchValue && searchValue.trim() != 0) {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };

  // console.log(
  //   searchValue,
  //   !!searchValue,
  //   searchValue.length,
  //   searchValue.trim().length
  // );

  //This works really well...styles imported as well, with the normal MUI install
  // const StyledButton = styled(Button)`
  //   background-color: red;
  //   color: #fff;
  //   padding: 12px 12px;
  //   &:hover {
  //     background-color: black;
  //   }
  //   &:focus {
  //     background-color: green;
  //   }
  // `;

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        mr: { sm: 5 },
      }}
    >
      <input
        ref={myRef}
        style={{ height: "35px", fontSize: "20px" }}
        className="search-bar"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Link to={`/search/${searchValue}`} onClick={handleSubmit}>
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Link>
    </Paper>
  );
};

export default SearchBar;

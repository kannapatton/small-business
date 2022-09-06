import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import cookie from "cookie";

const Navigation = (props) => {
  const navigate = useNavigate();
  const loggedIn = document.cookie;

  return (
    <div>
      <AppBar style={{ background: "#F4A8D3" }} position="relative">
        <Toolbar>
          <Typography variant="h2" style={{ flexGrow: "1" }}>
            Restaurants Near Me
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/">AdminView</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/AddListings">Add</Link>
            </li>
            <li className="nav-list-item">
              <Link to="/listings">Listings</Link>
            </li>
            <li
              className="nav-list-item"
              onClick={() => {
                document.cookie = cookie.serialize("loggedIn", null, {
                  maxAge: 0,
                });
                navigate("/login");
              }}
            >
              {loggedIn ? "Logout" : "Login"}
            </li>
          </ul>
        </Toolbar>
      </AppBar>
      <Box
        backgroundColor="secondary.main"
        padding="50px"
        display="flex"
        flex-direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
      >
        {document.cookie === "loggedIn=true" ? (
          <Typography variant="h4" color="white" padding={1}>
            Logged in as: <span>{props.user.username}</span>
          </Typography>
        ) : null}
      </Box>
    </div>
  );
};
export default Navigation;
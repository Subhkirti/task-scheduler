import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

function Header() {
  return (
    <React.Fragment>
      <AppBar className="header">
        <Typography variant="h1">Task Scheduler</Typography>
      </AppBar>
      <Box mb={25}></Box>
    </React.Fragment>
  );
}

export default Header;

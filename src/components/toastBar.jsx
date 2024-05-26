// SnackbarService.js
import React from "react";
import ReactDOM from "react-dom";
import { Alert, Slide, Snackbar } from "@mui/material";

function showToastBar({
  message,
  severity = "error",
  duration = 2000,
  position = "bottom",
}) {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const snackbar = message && (
    <Snackbar
      TransitionComponent={Transition}
      open={true}
      autoHideDuration={duration}
      anchorOrigin={{
        vertical: position,
        horizontal: "center",
      }}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        sx={{
          fontSize: 16,
          boxShadow: "none",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );

  // Create a container element to render the Snackbar
  const container = document.createElement("div");
  document.body.appendChild(container);

  // Render the Snackbar component using ReactDOM.render
  ReactDOM.render(snackbar, container);

  // Automatically close the Snackbar after the specified duration
  setTimeout(() => {
    // Clean up: Remove the container element from the DOM
    document.body.removeChild(container);
  }, duration);
}
export default showToastBar;

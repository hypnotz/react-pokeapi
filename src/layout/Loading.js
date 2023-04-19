import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    </div>
  );
}

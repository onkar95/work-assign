import React from "react";
import { Typography } from "@mui/material";

const SectionTitle = ({ title, variant, component, others }) => {
  return (
    <Typography component={component} variant={variant} {...others}>
      {title}
    </Typography>
  );
};

export default SectionTitle;

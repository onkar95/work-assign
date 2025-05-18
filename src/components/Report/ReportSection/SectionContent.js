import React from "react";
import { Box } from "@mui/material";
import { sanitizeInput } from "../../utils";
import ReactHtmlParser from "react-html-parser";

const SectionContent = ({ content, ...others }) => {
  return (
    <Box
      fontWeight="400"
      whiteSpace={"pre-line"}
      sx={{
        color: "#444444",
        marginBottom: "30px",
        fontSize: "14px",
        lineHeight: "22px",
        "& h1, & h2, & h3, & h4, & h5, & h6": {
          margin: "0 0 10px",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "22px",
        },
        "& p": {
          margin: "0 0 15px",
          "& img": {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            display: "block",
          },
          "&:empty": {
            display: "none",
          },
        },
        "& ul, & ol": {
          margin: "0 0 15px",
          paddingLeft: "18px",
          "& li": {
            paddingTop: "3px",
            paddingBottom: "3px",
          },
        },
        "& strong, & b": {
          fontWeight: 500,
        },
      }}
      {...others}
    >
      <div>{ReactHtmlParser(sanitizeInput(content))}</div>
    </Box>
  );
};

export default SectionContent;

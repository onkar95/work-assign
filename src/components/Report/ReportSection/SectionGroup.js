import React from "react";
import { Box, Typography } from "@mui/material";
import { convertToLabel, sanitizeInput } from "../../utils";

const SectionGroup = ({ groupData }) => {
  //console.log("groupData", Object.keys(groupData));
  return (
    <Box mb={5}>
      {Object.keys(groupData).map((value, index) => (
        <Typography
          key={index}
          component="p"
          fontWeight="600"
          variant="sectionContent"
          mb={1}
        >
          {convertToLabel(value)}:{" "}
          <Typography fontWeight="400" variant="sectionContent" mb={0}>
            {groupData[sanitizeInput(value)]}
          </Typography>
        </Typography>
      ))}
    </Box>
  );
};

export default SectionGroup;

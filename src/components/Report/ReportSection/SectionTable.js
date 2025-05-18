import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import { validateArrayData } from "../../utils";
import CustomTable from "../../../CustomTable";

const SectionTable = ({ tableData }) => {
  //console.log("Table Data", tableData);
  return (
    <Box mb={5}>
      {tableData.summary ? (
        <SectionTitle
          title={tableData.summary}
          variant={"sectionSummary"}
          component={"h4"}
        />
      ) : null}

      {validateArrayData(tableData.data) ? (
        <CustomTable
          data={tableData.data}
          isDensed={false}
          boxHeight={"auto"}
          disablePagination={true}
          numOfRowsPerPage={100}
          isTableLight={true}
        />
      ) : null}
    </Box>
  );
};

export default SectionTable;

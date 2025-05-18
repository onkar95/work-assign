import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import SectionTitle from "./SectionTitle";
import SectionGroup from "./SectionGroup";
import { validateArrayData } from "../../utils";
import SectionTable from "./SectionTable";
import SectionChart from "./SectionChart";
import SectionContent from "./SectionContent";

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    minHeight: "600px",
    padding: "50px 30px",
    borderBottom: `8px solid #030303`,
    position: "relative",
  },
  contentWrapper: {
    color: "#444444",
    marginBottom: "30px",
    fontSize: "16px",
    lineHeight: "24px",
  },
}));

const ReportSection = ({ indexNum, data }) => {


  console.log("ReportSection @@@@@@@@@@@@@@@@@@", data);
  const sectionList = Object.keys(data);

  const renderSectionComps = (component) => {
    switch (component) {
      case "title":
        return (
          <SectionTitle
            component="h3"
            variant="sectionTitle"
            title={data.title}
          />
        );
      case "sub_title":
        return (
          <SectionTitle
            component="h4"
            variant="sectionSubTitle"
            title={data.sub_title}
          />
        );
      case "data":
        return <SectionGroup groupData={data.data} />;
      case "table":
        return validateArrayData(data.table)
          ? data.table.map((tableData, index) => (
              <SectionTable key={index} tableData={tableData} />
            ))
          : null;
      case "chart":
        return validateArrayData(data.chart)
          ? data.chart.map((chartData, index) => (
              <SectionChart key={index} chartData={chartData} />
            ))
          : null;
      case "content":
        return <SectionContent content={data.content} />;
      default:
        return;
    }
  };

  const classes = useStyles();
  return (
    
    <Box
      className={clsx({
        [classes.pageContainer]: true,
        page: true,
      })}
    >   
      {validateArrayData(sectionList)
        ? sectionList.map((comp, index) => (
            <div key={index}>{renderSectionComps(comp)}</div>
          ))
        : null}
    </Box>
  );
};

export default ReportSection;

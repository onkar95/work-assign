import React, { useRef, useState } from "react";
import { Box, Dialog, DialogContent, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { validateArrayData } from "../utils";
import ReportSection from "./ReportSection";

const useStyles = makeStyles((theme) => ({
  customDialogWidth: {
    maxWidth: "950px",
  },
  pageContainer: {
    minHeight: "900px",
    padding: "50px 30px 100px",
    borderBottom: `8px solid #030303`,
    position: "relative",
  },
  pageFooter: {
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 30px",
    "& img": {
      width: "40px",
    },
    "& .MuiTypography-root": {
      color: "#999999",
      fontWeight: "500",
    },
  },
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  convoPage: {
    "& .page": {
      minHeight: "auto",
      borderBottomWidth: "0",
      paddingBottom: "20px",
      "& + .page": {
        borderTop: "1px solid #e5e5e5",
      },
    },
  },
  askButton: {
    position: "fixed",
    zIndex: 100,
    //backgroundColor: "#000000",
    //color: "#ffffff",
    lineHeight: "16px",
    width: "80px",
    boxShadow: "none !important",
    "&  &::after": {
      content: "",
      display: "block",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      borderTop: "10px solid red",
    },
  },
}));

const PDFDialog = ({
  open,
  handleClose,
  reportData,
  handleReportClick,
  reportType,
}) => {
  console.log("REPORT DATA --->", reportData);
  const [selectedText, setSelectedText] = useState("");

  const contentRef = useRef(null);
  const btnRef = useRef(null);

  // CLICK - Ask button
  const handleClickAskButton = (value) => {
    console.log("ASK BUTTON CLICKED - VALUE --->", value);
    handleReportClick(value);
    setTimeout(() => {
      handleClose();
    }, 500);
  };

  // COPY - selected text from report
  const handleTextCopy = () => {
    const content = contentRef.current;
    setSelectedText("");
    if (content) {
      const selection = window.getSelection();
      const position = selection.getRangeAt(0).getBoundingClientRect();
      const btnHeight = 38,
        btnHalfWidth = 40;
      //const range = document.createRange();

      setSelectedText(selection.getRangeAt(0).toString());

      // console.log("section", selection.getRangeAt(0).toString());
      btnRef.current.style.top = `${position.top - btnHeight}px`;
      btnRef.current.style.left = `${
        position.left + position.width / 2 - btnHalfWidth
      }px`;
    }
  };

  const classes = useStyles();
  return (
    <Dialog
      maxWidth={"md"}
      fullWidth={true}
      open={open}
      onClose={handleClose}
      // eslint-disable-next-line no-restricted-globals
      scroll={"paper"}
      classes={{
        paper: classes.customDialogWidth,
      }}
    >
      <Button
        size="small"
        variant="contained"
        onClick={() => handleClickAskButton(selectedText)}
        ref={btnRef}
        sx={{ display: selectedText != "" ? "block" : "none" }}
        className={classes.askButton}
      >
        Ask
      </Button>
      <DialogContent
        className={clsx({
          [classes.convoPage]:
            reportType && reportType == "CONVERSATION_SUMMARY",
        })}
        sx={{ backgroundColor: "#ffffff", padding: 0 }}
        // eslint-disable-next-line no-restricted-globals
        dividers={scroll === "paper"}
        ref={contentRef}
        // onClick={handleTextCopy}
      >
        <Box
          className={clsx(classes.flexCenter, classes.pageContainer)}
          flexDirection="column"
        >
          {/* <img src={"/static/img/ongil_favicon.png"} alt={"Logo"} /> */}
          <Typography
            mt={2}
            textAlign="center"
            component="h1"
            variant="reportTitle"
          >
            {reportData["title"] ? reportData["title"] : "Report"}
          </Typography>
        </Box>
        {/* Page 1 */}

        {/* Section */}
        {validateArrayData(reportData.data)
          ? reportData.data.map((section, index) => (
              <ReportSection
                key={index}
                indexNum={index}
                data={section}
                reportType={reportType}
              />
            ))
          : null}
        {/* Section - END */}
      </DialogContent>
    </Dialog>
  );
};

PDFDialog.propTypes = {};
export default PDFDialog;

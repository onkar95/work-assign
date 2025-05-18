import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "./SectionTitle";
import BarChartV2 from "../../../Charts/BarChartV2";
import LineChartV2 from "../../../Charts/LineChartV2";
import PieChartHC from "../../../Charts/PieChartHC";

const SectionChart = ({ chartData }) => {
  console.log("CHART DATA IN REPORT >>>>>>>>>>>",chartData)
  const {
    data,
    title,
    xLabel,
    yLabel,
    x_field,
    y_field,
    is_horizontal,
    tick_interval_days,
  } = chartData.chart_data;

  const renderPlotByType = (type) => {
    switch (type) {
      case "bar":
        return (
          <BarChartV2
            type={"COMPONENT_WRAPPER_CARD"}
            data={data}
            title={title}
            x_field={x_field}
            y_field={[{ field: y_field, label: yLabel }]}
            xLabel={xLabel}
            yLabel={yLabel}
            isHorizontal={is_horizontal}
          />
        );
      case "pie":
        return (
          <PieChartHC
            type={"COMPONENT_WRAPPER_CARD"}
            data={data}
            title={title}
            x_field={x_field}
            y_field={y_field}
            xLabel={xLabel}
            yLabel={yLabel}
          />
        );
      case "line":
        return (
          <LineChartV2
            type={"COMPONENT_WRAPPER_CARD"}
            data={data}
            title={title}
            x_field={x_field}
            y_field={y_field}
            xLabel={xLabel}
            yLabel={yLabel}
            tickIntervalDays={tick_interval_days}
          />
        );
      default:
        return;
    }
  };

  return (
    <Box mb={4}>
      {chartData.summary ? (
        <SectionTitle
          component="p"
          title={chartData.summary}
          variant={"sectionSummary"}
        />
      ) : null}

      <div>{renderPlotByType(chartData.chart_type)}</div>
    </Box>
  );
};

export default SectionChart;

import * as React from "react";
import Chart from "react-apexcharts";
import { Box, Card, CardHeader } from "@mui/material";
import { useTranslation } from "react-i18next";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];
export default function RecipeReviewCard() {
  const [translation] = useTranslation("translations");

  return (
    <Card>
      <CardHeader
        title={translation("dashboard.chart.title")}
        subheader={translation("dashboard.chart.description")}
      />
      <Box sx={{ mx: 3 }} dir="ltr">
        <Chart options={options} series={series} type="bar" width="500" />
      </Box>
    </Card>
  );
}

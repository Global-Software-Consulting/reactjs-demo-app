import { Grid } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import DashboardContainer from "../../containers/Dashboard";
import { useStyles } from "./styles";
import Text from "../../components/Typography";

function Dashboard() {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <Text variant="h4" value={translation("dashboard.title")} />
      </Grid>
      <DashboardContainer />
    </Grid>
  );
}

export default Dashboard;

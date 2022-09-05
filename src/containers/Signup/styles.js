import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
  },
}));

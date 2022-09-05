import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    zIndex: 0,
    boxShadow: "none",
    textAlign: "center",
    padding: "40px 0px",
    color: theme.colors.primary,
    backgroundColor: theme.colors.secondary,
    borderRadius: "16px",
    marginBottom: "30px",
  },
  footer: {
    fontWeight: 600,
    lineHeight: 2,
    fontSize: "14px",
  },
  heading: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "24px",
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
}));

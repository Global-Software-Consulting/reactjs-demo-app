import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { emailRegEx } from "../../utils/constants";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

export default function LogIn({ loading, onSubmit }) {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h1">
            {translation("login.title")}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              defaultValue={""}
              rules={{ required: true, pattern: emailRegEx }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label={translation("login.email.label")}
                  error={Boolean(errors?.email)}
                  helperText={
                    errors?.email && translation("login.email.message")
                  }
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={""}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label={translation("login.password.label")}
                  type="password"
                  error={Boolean(errors?.password)}
                  helperText={
                    errors?.password && translation("login.password.message")
                  }
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {loading ? (
                <CircularProgress
                  style={{ color: "#fff", height: "20px", width: "20px" }}
                />
              ) : (
                translation("login.submit")
              )}
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/signup">{translation("login.linkText")}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

LogIn.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

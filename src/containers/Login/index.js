import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { useStyles } from "./styles";
import { emailRegEx } from "../../utils/constants";
import { fetchApi } from "../../redux/api";
import SubmitButton from "../../components/Button";
import Links from "../../components/Link";
import Control from "../../components/Controller";
import Text from "../../components/Typography";

export default function LogIn() {
  const classes = useStyles();
  const [translation] = useTranslation("translations");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    localStorage.setItem("token", "ejma01290lalk109019njshaaajjaiaj109109y");
    dispatch(fetchApi());
    navigate("/");
  };

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Text
            component="h1"
            variant="h1"
            value={translation("login.title")}
          />

          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Control
              name="email"
              control={control}
              rules={{ required: true, pattern: emailRegEx }}
              type="email"
              label={translation("login.email.label")}
              error={Boolean(errors?.email)}
              helperText={errors?.email && translation("login.email.message")}
            />

            <Control
              name="password"
              control={control}
              rules={{ required: true }}
              type="password"
              label={translation("login.password.label")}
              error={Boolean(errors?.password)}
              helperText={
                errors?.password && translation("login.password.message")
              }
            />

            <SubmitButton
              handleSubmit={handleSubmit}
              value={translation("login.submit")}
              sx={{ width: "100%" }}
            />

            <Grid container>
              <Grid item>
                <Links nav="/signup" value={translation("login.linkText")} />
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

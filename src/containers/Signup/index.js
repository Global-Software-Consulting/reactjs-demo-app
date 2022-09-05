import React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useStyles } from "./styles";
import { emailRegEx } from "../../utils/constants";
import SubmitButton from "../../components/Button";
import Links from "../../components/Link";
import Control from "../../components/Controller";
import Text from "../../components/Typography";

export default function Signup() {
  const classes = useStyles();
  const [translation] = useTranslation("translations");
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    localStorage.setItem("token", "ejma01290lalk109019njshaaajjaiaj109109y");
    navigate("/login");
  };

  return (
    <Grid container component={Paper} className={classes.root}>
      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <div className={classes.paper}>
          <Text
            component="h1"
            variant="h1"
            value={translation("signup.title")}
          />

          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Control
              name="firstName"
              control={control}
              rules={{ required: true }}
              type="firstName"
              label={translation("signup.fName.label")}
              error={Boolean(errors?.firstName)}
              helperText={
                errors?.firstName && translation("signup.fName.message")
              }
            />

            <Control
              name="lastName"
              control={control}
              rules={{ required: true }}
              type="lastName"
              label={translation("signup.lName.label")}
              error={Boolean(errors?.lastName)}
              helperText={
                errors?.lastName && translation("signup.lName.message")
              }
            />

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
              label={translation("signup.password.label")}
              error={Boolean(errors?.password)}
              helperText={
                errors?.password && translation("signup.password.message")
              }
            />

            <SubmitButton
              handleSubmit={handleSubmit}
              value={translation("signup.submit")}
              sx={{ width: "100%" }}
            />

            <Grid container>
              <Grid item>
                <Links nav="/login" value={translation("signup.linkText")} />
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

Signup.propTypes = {
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

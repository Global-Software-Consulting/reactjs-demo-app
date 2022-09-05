import React from "react";
import axios from "axios";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import Text from "../../components/Typography";
import SubmitButton from "../../components/Button";
import Control from "../../components/Controller";
import { baseURL } from "../../redux/api";
import { emailRegEx } from "../../utils/constants";
import { fetchSuccess } from "../../redux/reducers/auth";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [translation] = useTranslation("translations");
  const [state] = React.useState({ name: "", email: "" });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (user) => {
    await axios
      .post(`${baseURL}/user`, user)
      .then(() => {
        navigate("/crud");
        dispatch(fetchSuccess(state));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Text variant="h1" value={translation("crud.add")} />
      <Paper elevation={5} sx={{ m: 2, p: 2, width: "70%" }}>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Control
              name="name"
              control={control}
              rules={{ required: true }}
              type="text"
              label={translation("crud.name")}
              error={Boolean(errors?.name)}
              helperText={errors?.name && translation("crud.message")}
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

            <SubmitButton
              handleSubmit={handleSubmit}
              value={translation("crud.add")}
              sx={{ width: "100%" }}
            />
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Add;

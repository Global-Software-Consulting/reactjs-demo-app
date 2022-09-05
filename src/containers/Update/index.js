import React from "react";
import axios from "axios";
import { Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

import Text from "../../components/Typography";
import Textfield from "../../components/TextField";
import SubmitButton from "../../components/Button";
import { handleSingleUser, baseURL } from "../../redux/api";
import { fetchSuccess } from "../../redux/reducers/auth";

const Update = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [translation] = useTranslation("translations");
  const [state, setState] = React.useState({ name: "", email: "" });
  const { name, email } = state;
  let { id } = useParams();
  const selector = useSelector((state) => state.auth.user);
  // console.log(selector.id);

  const { handleSubmit } = useForm();

  React.useEffect(() => {
    dispatch(handleSingleUser(id));
  }, []);

  React.useEffect(() => {
    if (selector) {
      setState({ ...selector });
    }
  }, [selector]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = () => {
    axios
      .put(`${baseURL}/user/${id}`, state)
      .then(() => {
        dispatch(fetchSuccess(state));
        navigate("/crud");
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
      <Text variant="h1" value={translation("crud.edit")} />
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
            <Textfield
              name="name"
              type="text"
              value={name || ""}
              label="name"
              onChange={handleInputChange}
            />

            <Textfield
              name="email"
              type="email"
              value={email || ""}
              label="email"
              onChange={handleInputChange}
            />

            <SubmitButton
              handleSubmit={handleSubmit}
              value={translation("crud.edit")}
              sx={{ width: "100%" }}
            />
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Update;

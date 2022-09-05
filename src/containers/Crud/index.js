import React from "react";
import { Grid, Button, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Text from "../../components/Typography";
import { fetchApi } from "../../redux/api";
import { handleDelete } from "../../redux/api";

const CrudContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [translation] = useTranslation("translations");
  const selector = useSelector((state) => state.auth.user.data);

  React.useEffect(() => {
    dispatch(fetchApi());
  }, []);

  const handleDeleteData = (id) => {
    dispatch(handleDelete(id));
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Text variant="h1" value={translation("crud.title")} />

      <Grid container sx={{ justifyContent: "flex-end", width: "70%" }}>
        <Button variant="contained" onClick={() => navigate("/add")}>
          <Text variant="h3" value={translation("crud.add")} />
        </Button>
      </Grid>

      <Paper elevation={5} sx={{ m: 2, p: 2, width: "70%" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Text variant="h3" value={translation("crud.name")} />
          <Text variant="h3" value={translation("crud.email")} />
          <Grid
            container
            sx={{
              justifyContent: "center",
              width: "25%",
            }}
          >
            <Text variant="h3" value={translation("crud.actions")} />
          </Grid>
        </Grid>
        {selector &&
          selector.map((data) => {
            return (
              <Grid
                key={data.id}
                container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Text variant="body1" value={data.name} />
                <Text variant="body1" value={data.email} />
                <Grid
                  container
                  sx={{
                    justifyContent: "space-around",
                    width: "25%",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => navigate(`/update/${data.id}`)}
                  >
                    <Text variant="h3" value={translation("crud.edit")} />
                  </Button>

                  <Button
                    variant="contained"
                    onClick={() => handleDeleteData(data.id)}
                  >
                    <Text variant="h3" value={translation("crud.delete")} />
                  </Button>
                </Grid>
              </Grid>
            );
          })}
      </Paper>
    </Grid>
  );
};

export default CrudContainer;

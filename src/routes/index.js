import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";

import PublicRoute from "./publicRoute";
import ProtectedRoute from "./protectedRoute";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Dashboard";
import Crud from "../pages/Crud";
import Add from "../containers/Add";
import Update from "../containers/Update";

function Routing() {
  return (
    <BrowserRouter>
      <Grid container>
        <CssBaseline />
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/crud"
            element={
              <ProtectedRoute>
                <Crud />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add"
            element={
              <ProtectedRoute>
                <Add />
              </ProtectedRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Grid>
    </BrowserRouter>
  );
}

export default Routing;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import ProtectedRoute from "./protectedRoute";
// import PublicRoute from "./publicRoute";
// import Home from "../pages/Dashboard";
// import Login from "../pages/Login";
// import Signup from "../pages/Signup";
// import Grid from "@mui/material/Grid";
// import CssBaseline from "@mui/material/CssBaseline";

// function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Grid container>
//         <CssBaseline />
//         <Routes>
//           <PublicRoute path="/login" component={<Login />} />
//           {/* <Route path="/login" element={<Login />} /> */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/" element={<Home />} />
//           {/* <Route
//             path="/*"
//             element={<PublicRoute index element={<Login />} />}
//           ></Route>

//           <Route
//             path="signup"
//             element={<PublicRoute index element={<Signup />} />}
//           ></Route>

//           <Route
//             path="/home"
//             element={<ProtectedRoute index element={<Home />} />}
//           ></Route> */}
//         </Routes>
//       </Grid>
//     </BrowserRouter>
//   );
// }

// export default AppRouter;

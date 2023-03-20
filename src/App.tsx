import { Grid } from "@mui/material";
import { LoginForm } from "./components/LoginForm";
import { useEffect } from "react";
import Parse from "parse/dist/parse.min.js"

Parse.initialize("organisationParse", "organisationParseJavascriptKey")
Parse.serverURL = "http://localhost:65001/parse/server"
export const App: React.FC = () => {


  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={3} md={3} lg={3}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

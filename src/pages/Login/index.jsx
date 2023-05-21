import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// - Page structure components
import { LoginForm } from "./LoginForm";
import { useForm } from "react-hook-form";
import { UserAuthContext } from "../../store/context";
import { useNavigate } from "react-router-dom";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const defaultTheme = createTheme();

export const LoginPage = () => {
  const userContext = React.useContext(UserAuthContext);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const handleSendForm = (data) => {
    console.log(data);
    if (data.email && data.password) {
      const access_token = "token";

      if (userContext) {
        userContext.login({ access_token });
      }

      localStorage.setItem("token", access_token);
      navigate("/", { replace: true });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* Login Section */}
          <LoginForm
            handleSubmit={handleSubmit(handleSendForm)}
            control={control}
          />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

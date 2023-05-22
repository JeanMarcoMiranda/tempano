import * as React from "react";
// - MUI components
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
// - External libraries
import { useForm } from "react-hook-form";
import { UserAuthContext } from "../../store/context";
import { useNavigate } from "react-router-dom";
import { getEnvVariables } from "../../helpers/getEnvVariables";

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
  const { VITE_API_URL } = getEnvVariables();
  const userContext = React.useContext(UserAuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    user: "",
    password: "",
  });

  // -- Send login request method
  const handleLoginSendForm = async (data) => {
    // -- Request vairables configuration
    //const LOGIN_URL = `${VITE_API_URL}/auth/login`;
    const LOGIN_URL = `https://api.tempano.net/api/v2/auth/login`;
    const LOGIN_REQUEST_PARAMS = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(LOGIN_URL, LOGIN_REQUEST_PARAMS);

    if (response.ok) {
      const dataParsed = await response.json();
      const { access_token, auth } = dataParsed;

      if (userContext) {
        userContext.login({ user: auth, access_token });
      }

      localStorage.setItem("user", JSON.stringify(auth));
      localStorage.setItem("token", access_token);
      navigate("/", { replace: true });
    } else {
      console.log("Login Error: Unknown error || Server error");
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
            handleSubmit={handleSubmit(handleLoginSendForm)}
            control={control}
            errors={errors}
          />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Controller } from "react-hook-form";

export const LoginForm = ({ handleSubmit, control, errors }) => (
  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    <Controller
      control={control}
      name="user"
      rules={{
        required: "El campo Nombre de usuario es requerido",
      }}
      render={({ field: { onChange } }) => (
        <TextField
          margin="normal"
          required
          fullWidth
          id="user"
          label="Nombre de usuario"
          name="user"
          autoFocus
          onChange={onChange}
          error={!!errors.user}
          helperText={errors.user?.message}
        />
      )}
    />

    <Controller
      control={control}
      name="password"
      rules={{
        required: "El campo Contraseña es requerido",
      }}
      render={({ field: { onChange } }) => (
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          onChange={onChange}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      )}
    />

    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
    </Button>
  </Box>
);

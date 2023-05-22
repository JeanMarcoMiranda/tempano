import React from "react";
import { Box, IconButton, TextField, Button } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { Controller } from "react-hook-form";

export const DescriptionsForm = ({ control, closeModal, handleSubmit, errors }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        p: 2,
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 24,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: "8px",
          right: "8px",
          zIndex: 1,
        }}
        onClick={closeModal}
      >
        <Clear />
      </IconButton>

      <form onSubmit={handleSubmit}>
        <Controller
          name="values.id"
          control={control}
          render={({ field: { value } }) => (
            <TextField
              label="ID"
              disabled
              value={value}
              fullWidth
              margin="normal"
              sx={{ marginTop: 5 }}
              size="small"
            />
          )}
        />
        <Controller
          name="values.descripcion"
          control={control}
          render={({ field: { value } }) => (
            <TextField
              label="DESCRIPCION"
              disabled
              value={value}
              fullWidth
              margin="normal"
              size="small"
            />
          )}
        />
        <Controller
          name="values.descripcionWeb"
          control={control}
          rules={{ required: "Debe llenar la descripcion web" }}
          render={({ field: { value, onChange } }) => (
            <TextField
              label="DESCRIPCION WEB"
              value={value}
              onChange={onChange}
              fullWidth
              margin="normal"
              size="small"
              sx={{ marginBottom: 3 }}
              error={!!errors.values?.descripcionWeb}
              helperText={errors.values?.descripcionWeb.message}
            />
          )}
        />

        <Button type="submit" variant="outlined">
          Guardar
        </Button>
      </form>
    </Box>
  );
};
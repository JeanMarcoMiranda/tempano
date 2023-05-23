import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
  Modal,
  Box,
  TextField,
} from "@mui/material";
import { Photo, CloudUpload } from "@mui/icons-material";

const photos = [
  {
    id: 1,
    descripcion: "Foto 1",
    foto: "https://s1.eestatic.com/2022/09/23/reportajes/705440357_227439387_1024x576.jpg",
  },
  {
    id: 2,
    descripcion: "Foto 2",
    foto: null,
  },
  {
    id: 3,
    descripcion: "Foto 3",
    foto: "https://www.tempano.net/img/products/grid/3208.jpg",
  },
];

export const Photos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
    setSelectedImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Lógica para manejar la subida de la imagen aquí
    // Puedes enviar la imagen a un servidor o almacenarla localmente
    closeUploadModal();
  };

  return (
    <>
      <TableContainer component={Box} sx={{ width: "100%" }}>
        <Table sx={{ display: "flex", flexDirection: "column" }}>
          <TableHead>
            <TableRow sx={{ display: "flex" }}>
              <TableCell sx={{ flex: "1" }}>ID</TableCell>
              <TableCell sx={{ flex: "1" }}>DESCRIPCION</TableCell>
              <TableCell sx={{ flex: "1" }}>FOTO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((photo) => (
              <TableRow key={photo.id} sx={{ display: "flex" }}>
                <TableCell sx={{ flex: "1" }}>{photo.id}</TableCell>
                <TableCell sx={{ flex: "1" }}>{photo.descripcion}</TableCell>
                <TableCell sx={{ flex: "1" }}>
                  <Stack direction="row" spacing={1}>
                    {photo.foto ? (
                      <Button
                        startIcon={<Photo />}
                        variant="outlined"
                        onClick={() => openModal(photo)}
                      >
                        Ver foto
                      </Button>
                    ) : null}
                    <Button
                      startIcon={<CloudUpload />}
                      variant="outlined"
                      onClick={openUploadModal}
                    >
                      Subir foto
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={selectedPhoto !== null} onClose={closeModal}>
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
          {selectedPhoto && (
            <>
              <img
                src={selectedPhoto.foto}
                alt="Foto"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                  marginTop: "25px",
                  marginBottom: "8px",
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  zIndex: 1,
                }}
                onClick={closeModal}
              >
                X
              </Button>
            </>
          )}
        </Box>
      </Modal>
      <Modal open={uploadModalOpen} onClose={closeUploadModal}>
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
          <form onSubmit={handleUpload}>
            <TextField
              type="file"
              label="Seleccionar imagen"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/*",
                onChange: handleImageChange,
              }}
              sx={{
                marginTop: 5,
              }}
              required
            />
            {selectedImage && (
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Previsualización de la imagen"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    borderRadius: "4px",
                  }}
                />
              </Box>
            )}
            <Button
              variant="outlined"
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                zIndex: 1,
              }}
              onClick={closeUploadModal}
            >
              X
            </Button>
            <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: "16px" }}
            >
              Subir
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

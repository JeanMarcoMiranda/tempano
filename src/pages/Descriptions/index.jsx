import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import {DescriptionsForm} from "./DescriptionsForm";

const descriptions = [
  {
    id: 1,
    descripcion: "Descripción 1",
    descripcionWeb: "Descripción web 1",
  },
  {
    id: 2,
    descripcion: "Descripción 2",
    descripcionWeb: "Descripción web 2",
  },
  {
    id: 3,
    descripcion: "Descripción 3",
    descripcionWeb: "Descripción web 3",
  },
];

export const Descriptions = () => {
  const [selectedDescription, setSelectedDescription] = useState(null);
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      values: {
        id: "",
        descripcion: "",
        descripcionWeb: "",
      },
    },
  });

  const openModal = (description) => {
    setSelectedDescription(description);
    // Esto debe eliminarse cuando se implemente el fetch para traer los datos
    setValue("values.id", description.id);
    setValue("values.descripcion", description.descripcion);
    setValue("values.descripcionWeb", description.descripcionWeb);
  };

  const closeModal = () => {
    setSelectedDescription(null);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data); // Manejar los datos del formulario según sea necesario
    closeModal();
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>DESCRIPCION</TableCell>
              <TableCell>DESCRIPCION WEB</TableCell>
              <TableCell>ACCIONES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {descriptions.map((description) => (
              <TableRow key={description.id}>
                <TableCell>{description.id}</TableCell>
                <TableCell>{description.descripcion}</TableCell>
                <TableCell>{description.descripcionWeb}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    onClick={() => openModal(description)}
                    startIcon={<Edit />}
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={!!selectedDescription} onClose={closeModal}>
        <>
          <DescriptionsForm
            control={control}
            closeModal={closeModal}
            handleSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        </>
      </Modal>
    </>
  );
};

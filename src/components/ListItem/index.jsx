import React, { useContext } from "react";
import { Home, InsertPhoto, Description, Logout } from "@mui/icons-material";
import { UserAuthContext } from "../../store/context";

const ListItem = () => {
  const userContext = useContext(UserAuthContext);

  const navigationRoutesSidebar = [
    { path: "/photos", title: "Fotos", icono: <InsertPhoto /> },
    { path: "/descriptions", title: "Descripciones", icono: <Description /> },
  ];

  const navigationRoutesMenuHeader = [
    {
      path: "/login",
      title: "Salir",
      icon: <Logout />,
      action: () => userContext.logout(),
    },
  ];
  return { navigationRoutesSidebar, navigationRoutesMenuHeader };
};

export default ListItem;


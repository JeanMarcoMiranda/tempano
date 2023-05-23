import React, { useContext } from "react";
import { Home, InsertPhoto, Description, Logout } from "@mui/icons-material";
import { UserAuthContext } from "../../store/context";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
  const userContext = useContext(UserAuthContext);
  const navigate = useNavigate();

  const navigationRoutesSidebar = [
    { path: "/photos", title: "Fotos", icono: <InsertPhoto /> },
    { path: "/descriptions", title: "Descripciones", icono: <Description /> },
  ];

  const navigationRoutesMenuHeader = [
    {
      path: "/login",
      title: "Salir",
      icon: <Logout />,
      action: () => {
        userContext.logout();
        navigate("/", { replace: true });
        localStorage.removeItem("token")
        //localStorage.removeItem("user")
      },
    },
  ];
  return { navigationRoutesSidebar, navigationRoutesMenuHeader };
};

export default ListItem;

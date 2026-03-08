import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ServiciosPage } from "./pages/ServiciosPage";
import { ProyectosPage } from "./pages/ProyectosPage";
import { ProyectoDetalle } from "./pages/ProyectoDetalle";
import { GuiasPage } from "./pages/GuiasPage";
import { GuiaDetalle } from "./pages/GuiaDetalle";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "planes", Component: ServiciosPage },
      { path: "servicios", Component: ServiciosPage },
      { path: "proyectos", Component: ProyectosPage },
      { path: "proyectos/:id", Component: ProyectoDetalle },
      { path: "guias", Component: GuiasPage },
      { path: "guias/:id", Component: GuiaDetalle },
      { path: "*", Component: NotFound },
    ],
  },
]);
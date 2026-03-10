import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { ServiciosPage } from "./pages/ServiciosPage";
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
      { path: "guias", Component: GuiasPage },
      { path: "guias/:id", Component: GuiaDetalle },
      { path: "*", Component: NotFound },
    ],
  },
]);
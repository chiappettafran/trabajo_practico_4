import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { InstrumentosList } from "./components/Instrumentos/InstrumentosList";
import {Home} from "./components/home/Home";
import {Map} from "./components/map/Map";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />,
            },
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'ubicacion',
                element: <Map />,
            },
            {
                path: 'instrumentos',
                element: <InstrumentosList />,
            },
        ]
    }
]);

export default router;

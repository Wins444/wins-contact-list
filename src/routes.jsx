import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { EditUser } from "./pages/EditUser";
import { Home } from "./pages/Home";
import { CreateUser } from "./pages/CreateUser";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} errorElement={<h1>Not found!</h1>} />
            <Route path="/EditUser/:theId" element={<EditUser />} />
            <Route path="/CreateUser" element={<CreateUser />} />
        </>
    )
);

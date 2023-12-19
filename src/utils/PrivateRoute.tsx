import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export const PrivateRoute = () => {

    const {user} = useAuth()

    let token =   user?.token
    return (
            token ? <Outlet/> : <Navigate to="/" />
    )
}

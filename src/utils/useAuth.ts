import { useContext } from "react";
import { AuthContext } from "../context/ContextProvider";
export const useAuth = () => {
    const { ...context } = useContext(AuthContext);
    return context;

}
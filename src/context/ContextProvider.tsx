import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserProps = {
    username: string
    token: string
}

type LoginProps = {
    username: string
    password: string
}

type AuthContextProps = {
    user: UserProps | null
    login: (data: LoginProps) => Promise<void>
    register: (data: LoginProps) => Promise<void>
    logout: () => void
    isFetche: boolean

}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [isFetche, setIsFetch] = useState<boolean>(false)
    const navigate = useNavigate();

    async function login(data: LoginProps) {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }

            setIsFetch(true);
            const result = await fetch("http://localhost:8000/login", options);

            const dataUser = await result.json()
            setUser({
                token: dataUser.token,
                username: data.username
            })
            setIsFetch(false);
            navigate("/products")

        } catch (error) {
            console.error(error)
            setIsFetch(false);
        }
    }

    async function register(data: LoginProps) {
        try {
            const options = {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            }

            setIsFetch(true);
            const result = await fetch("http://localhost:8000/register", options);
            const dataUser = await result.json();
            console.log(dataUser);
            setIsFetch(false);
        } catch (error) {
            console.error(error)
            setIsFetch(false);
        }
    }

    function logout() {
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{
            login,
            logout,
            user,
            isFetche,
            register
        }}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )
}
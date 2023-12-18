import { useAuth } from "../utils/useAuth"

export function Products() {
    const { logout, user } = useAuth();
    return (
        <div style={{
            width: "100vw",
            display: "grid",
            placeContent: "center",
            textAlign: "center",
            gap:"30px"
        }}>
            <h1>Você está logado!</h1>
            <h2>Seja bem vindo, {user?.username}!</h2>
            <button onClick={logout}>Sair</button>
        </div>
    )
}
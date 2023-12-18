import { FormEvent, useState } from 'react';
import { useAuth } from '../utils/useAuth'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';

export function Login() {
    const { login, isFetche } = useAuth();

  

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        await login({username,password});

        setUsername("");
        setPassword("");
        
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            {isFetche ? <p>Entrando...</p>:<form
                className={styles.form}
                onSubmit={e => handleLogin(e)}
            >
                <label htmlFor="username">Nome de usuário</label>
                <input
                    type="text"
                    name="username"
                    onChange={e => { setUsername(e.target.value) }}
                    value={username}
                />

                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    onChange={e => { setPassword(e.target.value) }}
                    value={password}
                />
                <button className={styles.submitBtn} type="submit">Entrar</button>
            </form>}
        </div>

    )
}
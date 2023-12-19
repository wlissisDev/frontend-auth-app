import { FormEvent, useState } from 'react';
import { useAuth } from '../utils/useAuth'
import styles from './login.module.css'
import { Link } from 'react-router-dom';

export function Register() {
    const { register, isFetche } = useAuth();

  

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e: FormEvent) {
        e.preventDefault();
        await register({username,password});

        setUsername("");
        setPassword("");
        
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastre-se</h1>
            {isFetche ? <p>Criando conta...</p>:<form
                className={styles.form}
                onSubmit={e => handleRegister(e)}
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
                <button className={styles.submitBtn} type="submit">Criar conta</button>
            </form>}
            <Link to="/"
             style={{
                fontWeight:"bold"
            }}
            >Login</Link>
        </div>

    )
}
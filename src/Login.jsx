import React from "react";
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigate = useNavigate()

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            navigate('/admin/dasboard')
        } else {
            alert('Invalid credentials')

        }
    }
    return (
        <div >
            <h1> Admin Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>

    )

}
export default Login
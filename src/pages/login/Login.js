import './Login.css';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    login(email, password);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password</span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading...
        </button>
      )}
      {error && <div className="error">{error} </div>}
    </form>
  );
}

import './Navbar.css';
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {
  const { user } = useAuthContext();
  const { logout, isPending } = useLogout();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Temple} alt="logo" />
          <span>Fanel's Dojo</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </li>{' '}
          </>
        )}

        {user && (
          <li>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <div className="btn" disabled>
                {' '}
                Logging out ...
              </div>
            )}
          </li>
        )}
      </ul>
    </div>
  );
}

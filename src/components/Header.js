import { Link } from 'react-router-dom';

function Header() {
  return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    TodoList App
                </Link>
                <div className="collapse navbar-collapse justify-content-end">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                        <Link className="nav-link" to="/register">
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
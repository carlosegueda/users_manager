import { Link } from "react-router-dom";
import '../css/Navbar.css';


export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">LOGIN</Link>
      <Link to="/dash">DASHBOARD</Link>
      <Link to="/register">REGISTRAR</Link>
    </nav>
  );
}

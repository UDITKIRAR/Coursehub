import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")}>
        Coursehub
      </h1>
      <ul  >
      <li  >
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

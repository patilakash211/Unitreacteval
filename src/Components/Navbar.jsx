import { NavLink } from "react-router-dom";
const links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Login",
      to: "/Login",
    },
    {
      title: "Register",
      to: "/Register",
    },
  
    {
      title: "Employee",
      to: "/Employeen",
    },
  ];
  
  export const Navbar = () => {
    return (
      <div style={{ background: "grey", padding: "10px" }}>
        {links.map(({ title, to }, index) => (
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
              padding: "10px",
            })}
            key={index}
            to={to}
          >
            {title}
          </NavLink>
        ))}
      </div>
    );
  };
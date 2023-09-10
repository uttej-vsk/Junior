import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const location = useLocation();
  const auth = useAuth();
  const routePrefix = "/dashboard";

  const isDashboardRoute = location.pathname.startsWith(routePrefix);

  const buttonStyle = {
    width: "100px",
    height: "40px",
    marginRight: "10px",
    backgroundColor: "#3A3ACC",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <nav className='flex justify-end items-center'>
      {/* Only show the links if not in the dashboard routes */}
      {!isDashboardRoute && location.pathname !== "/" && (
        <NavLink to='/'>
          <button>Home</button>
        </NavLink>
      )}

      {!isDashboardRoute && location.pathname !== "/login" && (
        <NavLink to='/login'>
          <button>Login</button>
        </NavLink>
      )}

      {!isDashboardRoute && location.pathname !== "/register" && (
        <NavLink to='/register'>
          <button>Register</button>
        </NavLink>
      )}

      {auth.user && isDashboardRoute && (
        <div className='flex items-center mt-2'>
          <img
            src={`${auth.user.avatar}`}
            alt=''
            className='rounded-full w-10 h-10 mr-2 align-middle '
          />
          <span className='inline-block align-middle'>
            <b>Welcome, {auth.user.first_name}!</b>
          </span>
          <NavLink to='/'>
            <button onClick={auth.logout} className='mx-2'>
              Logout
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

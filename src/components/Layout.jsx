import { NavLink, Outlet } from "react-router-dom";


export const Layout = () => {
    return (
    <header>
      <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movie">Movies</NavLink>
        <Outlet/>
      </nav>
  </header>
    )
}
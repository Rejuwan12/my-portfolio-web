import { NavLink } from "react-router-dom";


const Navbar = () => {

     const links = <>
     <NavLink to={"/"}><li><a>Home</a></li></NavLink>
     <NavLink to={"/blog"}><li><a>Blog</a></li></NavLink>
     <NavLink to={"/contact"}><li><a>Contact</a></li></NavLink>
     </>

    return (
        <div className="navbar bg-amber-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl font-bold">Rian</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu font-bold menu-horizontal px-1">
     {links}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;
import Nav from "../UI/Nav";
import Search from "../UI/NavSearch";

const Navbar = () => {
  return (
    <>
      {" "}
      <div className="navbar-desktop">
        <Search />
        <Nav />
      </div>
      <div className="navbar-mobile">{/* <MobileNavbar /> */}</div>
    </>
  );
};

export default Navbar;

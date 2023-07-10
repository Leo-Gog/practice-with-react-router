import { Link, Outlet, useNavigate } from "react-router-dom";

const NavLayout = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="tabs">
        <Link to={'/'} className="tab">Home</Link>
        <Link to={'/about'} className="tab">About</Link>
        <Link to={`/fact/${Math.floor(Math.random() * 25 + 1)}`} className="tab" >Random Fact</Link>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default NavLayout;
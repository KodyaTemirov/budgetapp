import { Link, Outlet } from "react-router-dom";
import s from "./Layout.module.css";
function Layout() {
  return (
    <>
      <header className={s.header}>
        <div>
          <Link to="/" className={s.logo}>
            {" "}
            Budget Tracker
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;

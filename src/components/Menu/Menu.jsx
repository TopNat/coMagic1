import s from "./Menu.module.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className={s.main}>
      <NavLink to="/">Календарь</NavLink>
      <NavLink to="/reg">Регистрация</NavLink>
    </nav>
  );
}
export default Menu;

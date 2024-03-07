import s from "./App.module.css";
import AppRoutes from "./Routes";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className={s.center}>
      <header className={s.header}>CoMagic 1 </header>
      <div className={s.conteiner}>
        <div className={s.menu}>
          <Menu />
        </div>
        <div className={s.app}>
          <AppRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;

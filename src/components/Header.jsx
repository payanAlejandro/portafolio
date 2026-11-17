export const Header = ({ theme, onToggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <header className="topbar">
      <div className="wrap">
        <a className="brand" href="#inicio">
          Alejandro Payan
        </a>
        <nav aria-label="Principal">
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#formacion">Formación</a>
          <a href="#contacto">Contacto</a>
          <button
            type="button"
            className="theme-btn"
            onClick={onToggleTheme}
            aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {isDark ? "Modo claro" : "Modo oscuro"}
          </button>
        </nav>
      </div>
    </header>
  );
};

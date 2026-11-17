import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <section id="proyectos" className="wrap section">
      <h2 className="label">Proyectos</h2>

      <ul>
        {projects.map((p) => (
          <li key={p.title} className="project">
            <h3>
              {p.title}
              <span className="status">{p.badge}</span>
            </h3>
            <p>{p.description}</p>
            <p className="meta">{p.tags.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

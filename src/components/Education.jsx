import { courses, education } from "../data/education";

export const Education = () => {
  return (
    <section id="formacion" className="wrap section">
      <h2 className="label">Formación</h2>

      <h3 className="sub">Estudios</h3>
      <ul className="edu">
        {education.map((e) => (
          <li key={e.title}>
            <strong>{e.title}</strong>
            <span>
              {e.school} · {e.period}
            </span>
          </li>
        ))}
      </ul>

      <h3 className="sub">Cursos de Platzi</h3>
      <p className="meta">Marzo – abril de 2023. Cada nombre enlaza a su diploma.</p>
      {courses.map((group) => (
        <div key={group.group} className="course-group">
          <h4>{group.group}</h4>
          <ul className="courses">
            {group.items.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

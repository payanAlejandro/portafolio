import experience from "../data/experience.json";

export const Experience = () => {
  return (
    <section id="experiencia" className="wrap section">
      <h2 className="label">Experiencia</h2>

      {experience.map((job) => (
        <article key={job.id} className="entry">
          <p className="when">{job.period}</p>
          <div>
            <h3>{job.organisation}</h3>

            {job.roles.map((role) => (
              <div key={role.title + role.period} className="role-block">
                <p className="role-head">
                  <strong>{role.title}</strong>
                  <span className="meta">{role.period}</span>
                </p>
                <p className="role-sum">{role.summary}</p>
                <ul className="dash">
                  {role.highlights.map((h) => (
                    <li key={h.label}>
                      <b>{h.label}.</b> {h.text}
                    </li>
                  ))}
                </ul>
                <p className="meta">{role.tags.join(" · ")}</p>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

import experience from "../src/data/experience.json";
import projects from "../src/data/projects.json";
import skills from "../src/data/skills.json";
import { courses, education } from "../src/data/education";
import { profile } from "../src/data/profile";
import { getImageUrl } from "../src/utils";

/* ---------- Garabatos hechos a mano (SVG) ---------- */
const Underline = () => (
  <svg className="doodle underline" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
    <path pathLength="1" d="M2 8 C 30 2, 60 12, 100 6 S 170 4, 198 9" />
  </svg>
);

const Ring = () => (
  <svg className="doodle ring-svg" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
    <path
      pathLength="1"
      d="M 14 34 C 8 10, 70 4, 108 6 C 160 8, 196 18, 190 36 C 184 54, 110 58, 62 54 C 28 51, 6 46, 12 26"
    />
  </svg>
);

const Arrow = () => (
  <svg className="doodle arrow" viewBox="0 0 120 70" aria-hidden="true">
    <path pathLength="1" d="M6 6 C 28 44, 70 56, 108 44" />
    <path pathLength="1" d="M94 30 L110 44 L92 54" />
  </svg>
);

const tones = ["#ffe9a8", "#ffd3dc", "#cfe6ff", "#d3f0da", "#e6dcff"];

export default function Papel() {
  return (
    <div className="sheet">
      <header className="bar">
        <a className="mark" href="#inicio">
          ap.
        </a>
        <nav aria-label="Principal">
          <a href="#experiencia">experiencia</a>
          <a href="#proyectos">proyectos</a>
          <a href="#stack">stack</a>
          <a href="#formacion">formación</a>
          <a href="#contacto">contacto</a>
        </nav>
      </header>

      <main>
        {/* ---------- Presentación ---------- */}
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="note hello">¡hola! soy</p>
            <h1>
              Alejandro{" "}
              <span className="underlined">
                Payan
                <Underline />
              </span>
            </h1>
            <p className="role">
              desarrollador{" "}
              <span className="circled">
                full stack
                <Ring />
              </span>
              , con enfoque en backend
            </p>

            <p className="bio">
              Hago software para <mark>gobierno</mark>: sistemas de
              contabilidad, nómina y recaudación que corren en producción. Me
              siento más cómodo en el backend, con Django y PostgreSQL, pero
              también armo las pantallas en React y conecto sistemas entre sí.
            </p>

            <p className="links">
              <a href={`mailto:${profile.email}`}>correo</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin
              </a>
              {profile.github.map((gh) => (
                <a key={gh.url} href={gh.url} target="_blank" rel="noreferrer">
                  github/{gh.label}
                </a>
              ))}
            </p>

            <p className="note down">
              aquí abajo, lo que he hecho
              <Arrow />
            </p>
          </div>

          <figure className="polaroid">
            <img
              src={getImageUrl("hero/Alejandro.jpg")}
              alt={`Foto de ${profile.name}`}
              width="260"
              height="260"
            />
            <figcaption>yo :)</figcaption>
          </figure>
        </section>

        {/* ---------- Experiencia ---------- */}
        <section id="experiencia" className="block">
          <h2 className="title">
            <span>experiencia</span>
          </h2>

          {experience.map((job, i) => (
            <article key={job.id} className={`card ${i % 2 ? "tilt-r" : "tilt-l"}`}>
              <span className="tab" style={{ background: tones[i % tones.length] }}>
                {job.period}
              </span>
              <h3>{job.organisation}</h3>

              {job.roles.map((role) => (
                <div key={role.title + role.period} className="role-block">
                  <p className="role-head">
                    <em>{role.title}</em>
                    <span className="mono">{role.period}</span>
                  </p>
                  <p className="role-sum">{role.summary}</p>
                  <ul className="dash">
                    {role.highlights.map((h) => (
                      <li key={h.label}>
                        <b>{h.label}.</b> {h.text}
                      </li>
                    ))}
                  </ul>
                  <p className="mono tags">{role.tags.join(" · ")}</p>
                </div>
              ))}
            </article>
          ))}
        </section>

        {/* ---------- Proyectos ---------- */}
        <section id="proyectos" className="block">
          <h2 className="title">
            <span>proyectos</span>
          </h2>

          <ul className="project-grid">
            {projects.map((p, i) => (
              <li
                key={p.title}
                className={`project ${i % 2 ? "tilt-r" : "tilt-l"}`}
                style={{ background: tones[(i + 1) % tones.length] }}
              >
                <span className="tape" aria-hidden="true" />
                {p.badge.includes("En desarrollo") && (
                  <span className="stamp">en desarrollo</span>
                )}
                <h3>{p.title}</h3>
                <p className="mono kind">{p.badge}</p>
                <p>{p.description}</p>
                <p className="mono tags">{p.tags.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Stack ---------- */}
        <section id="stack" className="block">
          <h2 className="title">
            <span>con qué trabajo</span>
          </h2>

          <ul className="postits">
            {skills.map((s, i) => (
              <li
                key={s.group}
                className="postit"
                style={{
                  background: tones[i % tones.length],
                  transform: `rotate(${[-2.2, 1.6, -1.2, 2.1, -1.8][i % 5]}deg)`,
                }}
              >
                <h3>{s.group}</h3>
                <p>{s.items.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- Formación ---------- */}
        <section id="formacion" className="block">
          <h2 className="title">
            <span>formación</span>
          </h2>

          <div className="two">
            <div>
              <h3 className="sub">estudios</h3>
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
            </div>

            <div>
              <h3 className="sub">cursos de platzi</h3>
              {courses.map((group) => (
                <div key={group.group} className="course-group">
                  <p className="mono">{group.group}</p>
                  <ul className="checks">
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
            </div>
          </div>
        </section>

        {/* ---------- Contacto ---------- */}
        <section id="contacto" className="block contact">
          <h2 className="title">
            <span>¿platicamos?</span>
          </h2>
          <p className="contact-lead">
            Si tienes un proyecto, una vacante o quieres hablar de backend o de
            integración de sistemas, escríbeme.
          </p>
          <a className="stampmail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="note">hecho a mano, con React</span>
      </footer>
    </div>
  );
}

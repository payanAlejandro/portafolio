import { profile } from "../data/profile";

export const Contact = () => {
  return (
    <>
      <section id="contacto" className="wrap section">
        <h2 className="label">Contacto</h2>
        <p className="contact-lead">
          Si tienes un proyecto, una vacante o quieres platicar de backend o de
          integración de sistemas, escríbeme.
        </p>
        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </section>

      <footer className="wrap footer meta">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#inicio">Volver arriba</a>
      </footer>
    </>
  );
};

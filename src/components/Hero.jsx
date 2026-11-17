import { profile } from "../data/profile";
import { getImageUrl } from "../utils";

export const Hero = () => {
  return (
    <section id="inicio" className="wrap hero">
      <div>
        <h1>{profile.name}</h1>
        <p className="role">Desarrollador full stack, con enfoque en backend.</p>

        <p className="bio">
          Hago software para <mark>gobierno</mark>: sistemas de contabilidad,
          nómina y recaudación que corren en producción. Me siento más cómodo en
          el backend, con Django y PostgreSQL, pero también armo las pantallas en
          React y conecto sistemas entre sí.
        </p>
        <p className="bio">
          Soy Ingeniero en Desarrollo y Gestión de Software y vivo en{" "}
          {profile.location}.
        </p>

        <p className="links">
          <a href={`mailto:${profile.email}`}>Correo</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          {profile.github.map((gh) => (
            <a key={gh.url} href={gh.url} target="_blank" rel="noreferrer">
              GitHub · {gh.label}
            </a>
          ))}
        </p>
      </div>

      <img
        className="portrait"
        src={getImageUrl("hero/Alejandro.jpg")}
        alt={`Foto de ${profile.name}`}
        width="140"
        height="140"
      />
    </section>
  );
};

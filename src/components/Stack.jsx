import skills from "../data/skills.json";

export const Stack = () => {
  return (
    <section id="stack" className="wrap section">
      <h2 className="label">Con qué trabajo</h2>

      <dl className="stack">
        {skills.map((s) => (
          <div key={s.group}>
            <dt>{s.group}</dt>
            <dd>{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

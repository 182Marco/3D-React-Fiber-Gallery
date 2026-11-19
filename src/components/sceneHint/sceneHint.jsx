import "./styles.scss";

// Legenda dei gesti della scena corrente, sempre visibile in un angolo.
const SceneHint = ({ name, tips, accent, lifted }) => {
  if (!tips?.length) return null;
  return (
    <ul
      className={`scene-hint ${lifted ? "lifted" : ""}`}
      style={{ "--accent": accent }}
      aria-label="How to explore this scene"
    >
      {tips.map(([key, text], i) => (
        <li key={`${name}-${i}`} style={{ "--i": i }}>
          <kbd>{key}</kbd>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export { SceneHint };

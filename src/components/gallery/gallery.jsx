import { useGallery } from "./gallery.hook";
import "./styles.scss";

const pad = n => String(n + 1).padStart(2, "0");

const Gallery = props => {
  const { items, current } = props;
  const h = useGallery(props);
  return (
    <>
      <div className="gallery-bar">
        <button
          className={`gallery-toggle ${h.hint ? "hint" : ""}`}
          onClick={h.toggle}
        >
          <span className="gallery-title">{h.currentTitle}</span>
          {h.hint ? (
            <small>Tap to explore {items.length} scenes</small>
          ) : (
            <span className="gallery-dots" aria-label="All scenes">
              {items.map(item => (
                <i
                  key={item.name}
                  className={item.name === current ? "active" : ""}
                />
              ))}
            </span>
          )}
        </button>
        <button
          className="gallery-step"
          aria-label="Previous scene"
          onClick={() => h.step(-1)}
        >
          ‹
        </button>
        <button
          className="gallery-step"
          aria-label="Next scene"
          onClick={() => h.step(1)}
        >
          ›
        </button>
      </div>
      {h.open && (
        <div className="gallery-overlay" onClick={h.close}>
          <div className="gallery-panel" onClick={e => e.stopPropagation()}>
            <header>
              <div>
                <h2>Pick a scene</h2>
                <p>{items.length} worlds to explore</p>
              </div>
              <button aria-label="Close" onClick={h.close}>
                ✕
              </button>
            </header>
            <ul>
              {items.map((item, i) => (
                <li key={item.name} style={{ "--i": i }}>
                  <button
                    className={item.name === current ? "active" : ""}
                    style={{ "--accent": item.accent }}
                    onClick={() => h.select(item.name)}
                  >
                    <em>{pad(i)}</em>
                    <b aria-hidden>{item.icon}</b>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                    {item.name === current && <u>Now viewing</u>}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export { Gallery };

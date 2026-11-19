import { useGallery } from "./gallery.hook";
import "./styles.scss";

const pad = n => String(n + 1).padStart(2, "0");
const hideBroken = e => (e.currentTarget.style.display = "none");

const Gallery = props => {
  const { items, current } = props;
  const h = useGallery(props);
  return (
    <>
      <div className="gallery-bar">
        <button
          className={`gallery-toggle ${h.hint ? "hint" : ""}`}
          style={{ "--accent": h.currentItem?.accent }}
          onClick={h.toggle}
        >
          <img
            className="gallery-thumb"
            src={h.currentItem?.thumb}
            alt=""
            onError={hideBroken}
          />
          <span className="gallery-text">
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
          </span>
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
        <div
          className="gallery-overlay"
          style={{ "--tint": h.tint }}
          onClick={h.close}
        >
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
                    onMouseEnter={() => h.setHovered(item.name)}
                    onMouseLeave={() => h.setHovered(null)}
                    onFocus={() => h.setHovered(item.name)}
                    onBlur={() => h.setHovered(null)}
                  >
                    <img
                      src={item.thumb}
                      alt=""
                      loading="lazy"
                      onError={hideBroken}
                    />
                    <span className="tags">
                      <em>{pad(i)}</em>
                      {item.lab && <u className="lab">Lab</u>}
                      {item.name === current && <u>Now viewing</u>}
                    </span>
                    <b aria-hidden>{item.icon}</b>
                    <span className="info">
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </span>
                    <span className="go" aria-hidden>
                      Open →
                    </span>
                  </button>
                  {item.tips.length > 0 && (
                    <ul className="tips" style={{ "--accent": item.accent }}>
                      {item.tips.map(([key, text]) => (
                        <li key={key + text}>
                          <kbd>{key}</kbd>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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

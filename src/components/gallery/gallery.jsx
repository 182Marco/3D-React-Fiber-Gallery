import { useGallery } from "./gallery.hook";
import "./styles.scss";

const Gallery = props => {
  const h = useGallery(props);
  return (
    <>
      <button className="gallery-toggle" onClick={h.toggle}>
        <span>{h.currentTitle}</span>
        <small>All projects</small>
      </button>
      {h.open && (
        <div className="gallery-overlay" onClick={h.close}>
          <ul onClick={e => e.stopPropagation()}>
            {props.items.map(item => (
              <li key={item.name}>
                <button
                  className={item.name === props.current ? "active" : ""}
                  style={{ "--accent": item.accent }}
                  onClick={() => h.select(item.name)}
                >
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export { Gallery };

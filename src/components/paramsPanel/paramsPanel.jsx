import { usePanel } from "./paramsPanel.hook";
import "./styles.scss";

const PILLS_MAX = 4;

const Control = ({ def, onChange }) => {
  const { value, options, actions } = def;

  if (actions)
    return (
      <div className="params-pills">
        {Object.entries(actions).map(([name, fn]) => (
          <button key={name} onClick={fn}>
            {name}
          </button>
        ))}
      </div>
    );

  if (options && options.length <= PILLS_MAX)
    return (
      <div className="params-pills">
        {options.map(o => (
          <button
            key={o}
            className={o === value ? "active" : ""}
            onClick={() => onChange(o)}
          >
            {o}
          </button>
        ))}
      </div>
    );

  if (options)
    return (
      <select value={value} onChange={e => onChange(e.target.value)}>
        {options.map(o => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );

  if (typeof value === "boolean")
    return (
      <button
        className={`params-toggle ${value ? "on" : ""}`}
        onClick={() => onChange(!value)}
        aria-pressed={value}
      />
    );

  if (typeof value === "number") {
    const { min = 0, max = 1, step = (max - min) / 100 } = def;
    return (
      <div className="params-slider">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
        />
        <output>{Number(value.toFixed(2))}</output>
      </div>
    );
  }

  return (
    <input
      type="color"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

const ParamsPanel = () => {
  const h = usePanel();
  if (!h.entries.length) return null;
  return (
    <aside className={`params-panel ${h.collapsed ? "collapsed" : ""}`}>
      <button className="params-header" onClick={h.toggleCollapsed}>
        <span>Controls</span>
        <i aria-hidden>{h.collapsed ? "+" : "–"}</i>
      </button>
      {!h.collapsed &&
        h.entries.map(def => (
          <label key={def.key} className="params-row">
            <span>{def.label}</span>
            <Control def={def} onChange={v => h.setValue(def.key, v)} />
          </label>
        ))}
    </aside>
  );
};

export { ParamsPanel };

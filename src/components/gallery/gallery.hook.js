import * as R from "react";

const HINT_KEY = "gallery-hint-seen";
const HINT_MS = 7000;

// localStorage può mancare o lanciare (finestra privata, dati bloccati).
const readSeen = () => {
  try {
    return localStorage.getItem(HINT_KEY) === "1";
  } catch {
    return false;
  }
};
const writeSeen = () => {
  try {
    localStorage.setItem(HINT_KEY, "1");
  } catch {
    /* il suggerimento riapparirà alla prossima visita: nessun danno */
  }
};

const useGallery = ({ items, current, onSelect }) => {
  const [open, setOpen] = R.useState(false);
  // Suggerimento "ci sono N scene" sul pulsante: solo finché non lo si è
  // visto, per HINT_MS o fino alla prima apertura della galleria.
  const [hint, setHint] = R.useState(() => !readSeen());

  const index = items.findIndex(i => i.name === current);
  const currentTitle = items[index]?.title ?? current;

  const dismissHint = R.useCallback(() => {
    setHint(false);
    writeSeen();
  }, []);

  R.useEffect(() => {
    if (!hint) return;
    const id = setTimeout(dismissHint, HINT_MS);
    return () => clearTimeout(id);
  }, [hint, dismissHint]);

  const toggle = () => {
    dismissHint();
    setOpen(o => !o);
  };
  const close = () => setOpen(false);
  const select = name => {
    onSelect(name);
    close();
  };
  // Scena precedente/successiva (circolare).
  const step = delta => {
    dismissHint();
    onSelect(items[(index + delta + items.length) % items.length].name);
  };

  R.useEffect(() => {
    if (!open) return;
    const onKeyDown = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return { close, currentTitle, hint, index, open, select, step, toggle };
};

export { useGallery };

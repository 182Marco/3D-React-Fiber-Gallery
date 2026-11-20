import * as R from "react";
import { atom, useAtom } from "jotai";
import { getProjectFromHash } from "../../scene/utils";

// Stato aperto/chiuso della galleria. È un atom (store globale) e non uno
// useState perché le scene, che vivono in un altro root React (il Canvas),
// devono saperlo: es. il carro mette in pausa la musica a galleria aperta.
// All'avvio è aperta, salvo link diretto a una scena. Il valore iniziale va
// passato direttamente: atom(funzione) sarebbe un atom derivato di sola
// lettura e scrivervi darebbe "not writable atom".
const galleryOpenAtom = atom(!getProjectFromHash());

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
  const [open, setOpen] = useAtom(galleryOpenAtom);
  // Card sotto il cursore: tinge lo sfondo della galleria col suo colore.
  const [hovered, setHovered] = R.useState(null);
  // Suggerimento "ci sono N scene" sul pulsante: solo finché non lo si è
  // visto, per HINT_MS o fino alla prima apertura della galleria.
  const [hint, setHint] = R.useState(() => !readSeen());

  const index = items.findIndex(i => i.name === current);
  const currentItem = items[index];
  const currentTitle = currentItem?.title ?? current;
  const tint =
    items.find(i => i.name === hovered)?.accent ?? currentItem?.accent;

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
  const close = () => {
    setOpen(false);
    setHovered(null);
  };
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

  return {
    close,
    currentItem,
    currentTitle,
    hint,
    index,
    open,
    select,
    setHovered,
    step,
    tint,
    toggle,
  };
};

export { galleryOpenAtom, useGallery };

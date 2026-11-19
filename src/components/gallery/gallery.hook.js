import * as R from "react";

const useGallery = ({ items, current, onSelect }) => {
  const [open, setOpen] = R.useState(false);

  const currentTitle = items.find(i => i.name === current)?.title ?? current;
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);
  const select = name => {
    onSelect(name);
    close();
  };

  R.useEffect(() => {
    if (!open) return;
    const onKeyDown = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return { close, currentTitle, open, select, toggle };
};

export { useGallery };

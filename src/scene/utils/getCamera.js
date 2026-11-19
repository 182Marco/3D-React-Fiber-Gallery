import { registry } from "./registry";

// Nessuna impostazione => valgono i default del chiamante
const getCamera = comp => ({
  camera: registry[comp]?.camera ?? {},
});

export { getCamera };

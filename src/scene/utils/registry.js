// Unico punto in cui si definisce un progetto selezionabile.
//   load        import dinamico del modulo (code splitting)
//   exportName  nome dell'export nominato da usare come componente
//   wrapper     "suspense" | "fallback" | "scroll" (vedi getComponents.jsx)
//   bg          classi CSS dello sfondo (default: "bg light-bg")
//   lab         true = esperimento mostrato con badge "Lab" in galleria
//   title/description/accent/icon  testo, colore ed emoji della card in galleria
//   fitWidth    false se la scena gestisce da sé la larghezza (default: true →
//               ResponsiveCamera riduce lo zoom su schermi stretti)
//   camera      { position, fov, near, far } passati al Canvas (default di R3F:
//               position [0,0,5], fov 75). Solo PhotoWorld lo usa: le scene
//               esistenti sono tarate sul default
//   background  colore di sfondo del Canvas (opzionale)
const registry = {
  Bike: {
    icon: "🚲",
    title: "Bicycle",
    description: "A 3D bicycle with continuously turning wheels.",
    accent: "#97d9e1",
    load: () => import("../../components/bike"),
    exportName: "Bike",
    wrapper: "fallback",
  },
  CartFollowingMidget: {
    icon: "🎠",
    title: "The Carriage of Destiny",
    description: "An endless landscape of objects looping past a cart.",
    accent: "#16a04b",
    load: () => import("../../components/cartFollowingMidget"),
    exportName: "CartFollowingMidget",
    wrapper: "suspense",
    bg: "bg green-bg",
  },
  Dog: {
    icon: "🐕",
    title: "Dog",
    description: "An animated dog: pick an animation from the panel.",
    accent: "#c9a27a",
    load: () => import("../../components/dog"),
    exportName: "Dog",
    wrapper: "fallback",
  },
  Explode: {
    icon: "💥",
    title: "Explode",
    description: "Scroll to blow a model apart and put it back together.",
    accent: "#e8a33d",
    load: () => import("../../components/explode"),
    exportName: "Explode",
    wrapper: "scroll",
  },
  Home3d: {
    icon: "🏠",
    title: "Home 3D",
    description: "A three-storey apartment revealed as you scroll.",
    accent: "#d9afd9",
    tips: [["Scroll", "glide through the three floors"]],
    load: () => import("../../components/home3d"),
    exportName: "Home3d",
    wrapper: "suspense",
  },
  PortalPass: {
    icon: "🌀",
    title: "Portal Pass",
    description: "Three cards that open portals into other 3D worlds.",
    accent: "#34495e",
    load: () => import("../../components/portalPass"),
    exportName: "PortalPass",
    wrapper: "fallback",
    fitWidth: false, // layout e distanza camera propri (portalPass.hook.js)
    bg: "bg dark-bg",
  },
  slideShow: {
    icon: "🎞️",
    title: "Slideshow",
    description: "A 3D slider where each slide is a window into a new world.",
    accent: "#8f9aa8",
    load: () => import("../../components/slideShow"),
    exportName: "SlideShow",
    wrapper: "fallback",
    fitWidth: false, // le slide usano già viewport.width
    bg: "bg",
    background: "#ececec",
  },
  Woman: {
    icon: "💃",
    title: "Woman",
    description: "An animated character: pick an animation from the panel.",
    accent: "#707070",
    load: () => import("../../components/woman"),
    exportName: "Woman",
    wrapper: "suspense",
    bg: "bg grey-bg",
  },
  Portal: {
    lab: true,
    icon: "🥚",
    title: "Portal",
    description: "Double-click the card to step inside another world.",
    accent: "#e8a33d",
    load: () => import("../../components/portal"),
    exportName: "Portal",
    wrapper: "suspense",
  },
  PhotoWorld: {
    lab: true,
    icon: "🌍",
    title: "Photo Worlds",
    description:
      "Stand inside a real 360° photo: drag to look around, click the objects to knock them like billiard balls.",
    accent: "#4a90c2",
    load: () => import("../../components/photoWorld"),
    exportName: "PhotoWorld",
    wrapper: "suspense",
    bg: "bg dark-bg",
    // guarda il fiume, il ponte, le colonne e gli edifici (HDR Plaza, ~ +X)
    camera: { position: [-6.4, 1.3, -1.3], fov: 58 },
  },
};

// Progetto mostrato all'avvio (dietro la modale della galleria).
const defaultProject = "CartFollowingMidget";

export { registry, defaultProject };

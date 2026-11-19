import * as R from "react";
import { Vector3 } from "three";
import { useParam } from "../paramsPanel";

const CUBE_FACES = ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"];

// Ogni mondo è un ambiente fotografico a 360° (HDR equirettangolare o cube
// map a 6 facce) usato sia come sfondo sia come luce/riflessi. Ognuno ha i
// suoi tre oggetti, scelti per i materiali che riflettono meglio quel luogo.
const worlds = {
  Plaza: {
    files: "./envMap/envMap.hdr",
    objects: [
      {
        shape: "sphere",
        position: [0.4, 0, -2.2],
        material: { color: "#ffffff", metalness: 1, roughness: 0 },
      },
      {
        shape: "torusKnot",
        position: [-0.2, 0, 0],
        material: { color: "#e8c27a", metalness: 1, roughness: 0.15 },
      },
      {
        shape: "icosahedron",
        position: [0.3, 0, 2.2],
        material: {
          color: "#a9d4ff",
          transmission: 1,
          thickness: 1.5,
          roughness: 0.05,
          ior: 1.5,
          attenuationColor: "#5aa9ff",
          attenuationDistance: 1.2,
        },
      },
    ],
  },
  Countryside: {
    files: "./envMap/1.hdr",
    objects: [
      {
        shape: "dodecahedron",
        position: [0.3, 0, -2.2],
        material: {
          color: "#c0392b",
          metalness: 0.2,
          roughness: 0.25,
          clearcoat: 1,
        },
      },
      {
        shape: "sphere",
        position: [-0.3, 0, 0],
        material: { color: "#ffffff", metalness: 1, roughness: 0.05 },
      },
      {
        shape: "octahedron",
        position: [0.4, 0, 2.2],
        material: { color: "#2e8b57", metalness: 0.6, roughness: 0.2 },
      },
    ],
  },
  Park: {
    files: CUBE_FACES,
    path: "./envMap/",
    objects: [
      {
        shape: "sphere",
        position: [-0.2, 0, -2.2],
        material: { color: "#b87333", metalness: 1, roughness: 0.1 },
      },
      {
        shape: "cylinder",
        position: [0.4, 0, 0],
        material: {
          color: "#f3ead7",
          metalness: 0.1,
          roughness: 0.35,
          clearcoat: 1,
        },
      },
      {
        shape: "dodecahedron",
        position: [-0.3, 0, 2.2],
        material: { color: "#15151a", metalness: 0.9, roughness: 0.08 },
      },
    ],
  },
};

const IMPULSE = 10;
const MAX_DRAG = 4; // px: oltre è un trascinamento della camera, non un click

const usePhotoWorld = () => {
  const name = useParam("world", {
    value: "Plaza",
    options: Object.keys(worlds),
  });
  const bodies = R.useRef([]);
  // Click su un oggetto: viene spinto via dal punto toccato (come una stecca
  // sulla palla); urtando gli altri li mette in moto.
  const push = (i, e) => {
    if (e.delta > MAX_DRAG) return;
    e.stopPropagation();
    const body = bodies.current[i];
    if (!body) return;
    const c = body.translation();
    const dir = new Vector3(c.x - e.point.x, 0, c.z - e.point.z);
    if (dir.lengthSq() < 1e-4) dir.set(1, 0, 0);
    dir.normalize().multiplyScalar(IMPULSE);
    body.applyImpulse({ x: dir.x, y: 0, z: dir.z }, true);
  };

  return { name, world: worlds[name], bodies, push };
};

export { usePhotoWorld };

import fs from "fs";
import path from "path";
import { registry, defaultProject } from "./registry";
import { projects } from "./projects";

const WRAPPERS = ["suspense", "fallback", "scroll"];
const entries = Object.entries(registry);

describe("registry", () => {
  it("contiene il progetto di default", () => {
    expect(registry[defaultProject]).toBeDefined();
  });

  it("projects.js è derivato dal registry", () => {
    expect(Object.keys(projects)).toEqual(Object.keys(registry));
  });

  describe.each(entries)("%s", (name, entry) => {
    it("ha i campi obbligatori", () => {
      expect(typeof entry.load).toBe("function");
      expect(typeof entry.exportName).toBe("string");
      expect(WRAPPERS).toContain(entry.wrapper);
      ["title", "description", "accent", "icon"].forEach(k =>
        expect(typeof entry[k]).toBe("string"),
      );
      expect(entry.accent).toMatch(/^#[0-9a-f]{6}$/i);
    });

    it("ha una thumbnail in public/thumbs", () => {
      const file = path.join(__dirname, "../../../public/thumbs", `${name}.jpg`);
      expect(fs.existsSync(file)).toBe(true);
    });

    it("esporta il componente indicato da exportName", async () => {
      const mod = await entry.load();
      const C = mod[entry.exportName];
      expect(C).toBeDefined();
      expect(["function", "object"]).toContain(typeof C);
    });
  });
});

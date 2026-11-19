import { registry } from "./registry";

// { Bike: "Bike", ... } derivato dal registry: non va modificato a mano.
const projects = Object.fromEntries(Object.keys(registry).map(k => [k, k]));

export { projects };

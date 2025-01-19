import * as U from "./utils";

const purify = html => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  U.removeScripts(doc);
  U.removeInlineEvents(doc);
  return doc.body.innerHTML;
};

export { purify };

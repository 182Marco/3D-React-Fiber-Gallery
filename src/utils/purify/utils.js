//  remove <script> elements
const removeScripts = doc =>
  doc.querySelectorAll("script").forEach(script => script.remove());

//  remove inline event attributes (e.g., onclick, onload)
const removeInlineEvents = doc => {
  doc.querySelectorAll("*").forEach(element => {
    Array.from(element.attributes).forEach(attr => {
      if (attr.name.startsWith("on")) {
        element.removeAttribute(attr.name);
      }
    });
  });
};

export { removeInlineEvents, removeScripts };

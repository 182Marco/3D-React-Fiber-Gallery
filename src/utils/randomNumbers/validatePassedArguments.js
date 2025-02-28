const validateRange = (range, name) => {
  if (!Array.isArray(range)) throw new Error(`${name} must be an array.`);
  if (range.length !== 2)
    throw new Error(`${name} must have exactly two elements.`);
  if (range[0] >= range[1])
    throw new Error(`${name} min must be less than max.`);
};

export { validateRange };

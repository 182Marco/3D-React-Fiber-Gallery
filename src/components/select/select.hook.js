const useSelect = () => {
  return {
    list: [],
    transformString: str =>
      str
        .replace(/_/g, "")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase(),
    setCurrentAction: undefined,
  };
};

export { useSelect };

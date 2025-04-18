import { useSelect } from "./select.hook";

const Select = () => {
  const u = useSelect();

  return (
    <>
      {u?.list?.length > 0 && (
        <section className="select">
          <select
            onChange={(e) => u.setCurrentAction(e.target.value)}
            className="custom-select"
          >
            <option value="">Select Animation</option>
            {u?.list?.map((e) => (
              <option key={e} value={e}>
                {u.transformString(e)}
              </option>
            ))}
          </select>
        </section>
      )}
    </>
  );
};

export { Select };

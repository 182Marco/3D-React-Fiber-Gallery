import { useBtnsBox } from "./btnsBox.hook";

const BtnsBox = () => {
  const u = useBtnsBox();

  return (
    <section className="btns-box">
      {u?.list?.length && (
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
      )}
    </section>
  );
};

export { BtnsBox };

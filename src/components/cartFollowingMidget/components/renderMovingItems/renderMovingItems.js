import * as C from "../../components";
import * as U from "./utils";
import { vars } from "./fixedVars";

const RenderMovingItems = ({ name }) => (
  <>
    {[...Array(vars[name].quantity)].map((_, i) => (
      <C.MovingItem
        xSpread={vars[name].xSpread}
        speed={vars[name].speed}
        key={i}
      >
        {(() => {
          switch (name) {
            case "rocks":
              return <C.Rock {...U.getSingleMeshProps(name, i)} />;
            case "lamps":
              return <C.LampPost {...U.getSingleMeshProps(name, i)} />;
            default:
              return <C.Tree {...U.getSingleMeshProps(name, i)} />;
          }
        })()}
      </C.MovingItem>
    ))}
  </>
);
export { RenderMovingItems };

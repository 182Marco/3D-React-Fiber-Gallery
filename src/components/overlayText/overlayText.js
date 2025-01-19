import * as D from "@react-three/drei";
import * as U from "../../utils";

const OverlayText = props =>
  !!props.txt && (
    <D.Scroll html>
      <main className="text-box">
        <section dangerouslySetInnerHTML={{ __html: U.purify(props.txt) }} />
      </main>
    </D.Scroll>
  );

export { OverlayText };

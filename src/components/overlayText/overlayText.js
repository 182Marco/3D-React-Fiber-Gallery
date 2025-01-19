import * as D from "@react-three/drei";
import * as U from "../../utils";
import "./styles.scss";

const OverlayText = props =>
  !!props?.txt?.length && (
    <D.Scroll html>
      {props.txt.map((e, i) => (
        <section className="text-box" key={i}>
          <div dangerouslySetInnerHTML={{ __html: U.purify(e) }} />
        </section>
      ))}
    </D.Scroll>
  );

export { OverlayText };

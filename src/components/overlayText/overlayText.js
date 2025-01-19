import * as D from "@react-three/drei";
import * as U from "../../utils";
import { useOverlayText } from "./OverlayText.hook";
import "./styles.scss";

const OverlayText = props => {
  const h = useOverlayText();
  return (
    !!props?.txt?.length && (
      <D.Scroll className="w100-scroll" html>
        {props.txt.map((e, i) => (
          <section className={i % 2 ? "" : "right"} key={i}>
            <div dangerouslySetInnerHTML={{ __html: U.purify(e) }} />
          </section>
        ))}
      </D.Scroll>
    )
  );
};

export { OverlayText };

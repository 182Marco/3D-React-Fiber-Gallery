import * as D from "@react-three/drei";

import { useOverlayText } from "./overlayText.hook";

const OverlayText = props => {
  const h = useOverlayText();
  const _props = { txt: "<h1> ciao a tutti monelli !</h1>" };
  return (
    <D.Scroll html>
      <main className="text-box">
        <section>
          <div>
            <div dangerouslySetInnerHTML={{ __html: _props.txt }} />
          </div>
        </section>
      </main>
    </D.Scroll>
  );
};

export { OverlayText };

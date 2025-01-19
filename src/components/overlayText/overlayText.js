import * as D from "@react-three/drei";

import { useOverlayText } from "./overlayText.hook";

const OverlayText = props => {
  const h = useOverlayText();
  const _props = {
    txt: "<h1> ciao a tutti monelli ! <br/> cioa <br/> cioa<br/> cioa</h1>",
  };
  return (
    <D.Scroll html>
      <main className="text-box">
        <section dangerouslySetInnerHTML={{ __html: _props.txt }} />
      </main>
    </D.Scroll>
  );
};

export { OverlayText };

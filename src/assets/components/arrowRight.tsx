import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ArrowRight(props: any) {
  return (
    <Svg
      width={39}
      height={36}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_26_60)">
        <Path
          d="M16.282 27l9.75-9-9.75-9-2.29 2.115L21.433 18l-7.443 6.885L16.282 27z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_26_60">
          <Path fill="#fff" d="M0 0H39V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowRight;

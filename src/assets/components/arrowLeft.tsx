import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function ArrowLeft(props: any) {
  return (
    <Svg
      width={39}
      height={36}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_26_92)">
        <Path
          d="M23.075 9l-9.75 9 9.75 9 2.291-2.115L17.924 18l7.442-6.885L23.075 9z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_26_92">
          <Path fill="#fff" d="M0 0H39V36H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default ArrowLeft;

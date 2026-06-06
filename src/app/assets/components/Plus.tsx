import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PlusSVG(props: any) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.313 8.594H13.28V1.563C13.281.7 12.581 0 11.72 0h-1.563c-.863 0-1.562.7-1.562 1.563v7.03H1.563C.7 8.594 0 9.294 0 10.157v1.563c0 .863.7 1.562 1.563 1.562h7.03v7.031c0 .863.7 1.563 1.563 1.563h1.563c.863 0 1.562-.7 1.562-1.563v-7.03h7.031c.863 0 1.563-.7 1.563-1.563v-1.563c0-.863-.7-1.562-1.563-1.562z"
        fill="#50C2C9"
      />
    </Svg>
  );
}

export default PlusSVG;

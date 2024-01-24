import React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M0 71l34.3-6.8c34.4-6.9 103-20.5 171.5-21.9 68.5-1.3 136.9 9.7 205.4 8.9 68.5-.9 137.1-13.5 205.8-12.9 68.7.7 137.3 14.7 206 14.9 68.7.1 137.3-13.5 205.8-15s136.9 9.1 205.4 14.3c68.5 5.2 137.1 4.8 171.5 4.7l34.3-.2V0H0z"
        fill="#6495ed"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgComponent;

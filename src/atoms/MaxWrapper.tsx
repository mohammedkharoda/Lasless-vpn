import React from "react";

const MaxWrapper = (props: any) => {
  return (
    <div id="MaxWrapper" className="max-w-[1600px] w-[100%] m-auto">
      {props.children}
    </div>
  );
};

export default MaxWrapper;

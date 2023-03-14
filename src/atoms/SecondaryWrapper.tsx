import React from "react";

const SecondaryWrapper = (props: any) => {
  return <div className="md:w-[90%]  m-auto relative">{props.children}</div>;
};

export default SecondaryWrapper;

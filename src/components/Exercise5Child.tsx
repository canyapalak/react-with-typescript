/* eslint-disable no-unused-vars */

import React from "react";

interface ChildProps {
  setValue: (value: string) => void;
}

export function Exercise5Child({ setValue }: ChildProps) {
  function changeString() {
    setValue("I was updated!");
  }
  return (
    <>
      <button onClick={changeString}>Change Parent Value</button>
    </>
  );
}

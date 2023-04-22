import React from "react";
import { useState } from "react";
interface Props {
  children: string;
  maxChar?: number;
}
const ExpandableTextBox = ({ children, maxChar = 100 }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpand ? children : children.substring(0, maxChar);
  return (
    <div>
      {text} ...
      <button onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableTextBox;

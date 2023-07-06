import React from "react";
import TableItem from "./TableItem";

const Table1 = (props) => {
  const arr = props.people;
  return (
    <div>
      {arr.map((item) => (
        <TableItem key={item.name} people={item} />
      ))}
    </div>
  );
};

export default Table1;

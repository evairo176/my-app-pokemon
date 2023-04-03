import { Pagination } from "@mui/material";
import React from "react";

function PaginationComponent({ total, setOffset }) {
  //   offset;

  const count = Math.ceil(total / 20);

  return (
    <Pagination
      count={count}
      onChange={(event, value) => setOffset(value * 20)}
    />
  );
}

export default PaginationComponent;

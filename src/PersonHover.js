import React from "react";
import { css } from "@emotion/core";

const PersonHover = ({ active, children }) => {
  return (
    <div
      css={css`
        display: ${active ? "block" : "none"};
      `}
    >
      {children}
    </div>
  );
};

export default PersonHover;

import React from "react";
import styled from "@emotion/styled";

//import { App } from "./index";

export const H1 = styled.h1(
  {
    color: "d#66ccff",
    fontSize: 60,
  },
  (props) => ({ color: props.color })
);

export const P = styled.p(
  {
    color: "d#ff8080",
    fontSize: 35,
  },
  (props) => ({ color: props.color })
);

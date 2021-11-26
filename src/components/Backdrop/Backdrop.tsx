import React from "react";
import { Props } from "./interfaces";
import { StyledBackdrop } from "./styles";

export const Backdrop: React.FC<Props> = props => (
  <StyledBackdrop
    isWhite={props.isWhite}
    onClick={props.onClickBackdrop} />
) 
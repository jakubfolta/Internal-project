import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import { Props } from "./interfaces";
import { StyledBackdrop } from "./styles";

const animationTiming = {
  enter: 500,
  exit: 500
};

export const Backdrop: React.FC<Props> = props => (
  <CSSTransition
    mountOnEnter
    unmountOnExit
    in={props.isVisible}
    timeout={animationTiming}
    classNames={{exitActive: 'hide'}}>
    <StyledBackdrop
      $isWhite={props.$isWhite}
      onClick={props.onClickBackdrop} />
  </CSSTransition>
) 
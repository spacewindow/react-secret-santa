import React from "react";
import { css, keyframes } from "emotion";

const strikeIn = keyframes`
  from{
    transform: scaleX(0)
  }
  to{
    transform : scaleX(1)
  }
`;

const strikeOut = keyframes`
  from{
    transform: scaleX(1)
  }
  to{
    transform : scaleX(0)
  }
`;

export default props => {

  const animationState = () => {
    if (props.todo.complete && !props.todo.firstRender) {
      return (`${strikeIn}`)
    } else if (!props.todo.complete && !props.todo.firstRender) {
      return (`${strikeOut}`)
    } else {
      return (`no-keyframes`)
    }
  }

  const todoStyle = css`
  cursor: pointer;
    color: red;
    position: relative;
    display: inline-flex;
    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      top: 50%;
      background: black;
      position: absolute;
      transform-origin: 0 50%;
      transform: scaleX(0);
      animation: ${animationState()} 0.2s ease forwards;
    }
  `
  console.log('this todo: ', props.todo);
  return (
    <div className={todoStyle} onClick={props.toggleComplete}>
      {props.todo.text}
    </div>
  )
};

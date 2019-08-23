import React from "react";
import styled from "styled-components";
import {
  IoIosArrowDown as ShowIcon,
  IoIosArrowUp as HideIcon
} from "react-icons/io";
import Container from "./../container";

const Child = props => {
  const { id, text, checked } = props.item;
  const { onChecked } = Container.useContainer();
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        onClick={e => onChecked(e, id)}
        checked={checked}
      />
      {text}
    </div>
  );
};

export default Child;

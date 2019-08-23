import React, { useEffect } from "react";
import styled from "styled-components";
import Container from "./../container";
import Child from "./child";

const Wrapper = styled.div`
  padding: 20px;
`;

const TreeStyled = styled.div`
  margin-left: ${props => props.depth + 5}px;
`;

const Tree = () => {
  const { tree, setTree } = Container.useContainer();

  const print = (newTree, depth) => {
    return newTree.map((item, index) => {
      return (
        <TreeStyled depth={depth}>
          <Child key={index} item={item} />
          {item.child.length !== 0 && print(item.child, depth + 1)}
        </TreeStyled>
      );
    });
  };
  return <Wrapper>{print(tree, 1)}</Wrapper>;
};

export default Tree;

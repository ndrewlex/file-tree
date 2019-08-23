import React, { useState } from "react";
import { createContainer } from "unstated-next";

interface IChild {
  id: string;
  text: string;
  checked: boolean;
  child: Array<IChild>;
}

const useData = () => {
  const [tree, setTree] = useState<Array<IChild>>([
    {
      id: "general-config",
      text: "General Config",
      checked: false,
      child: [
        {
          id: "A",
          text: "A",
          checked: false,
          child: [
            {
              id: "A1",
              text: "A1",
              checked: false,
              child: []
            }
          ]
        },
        {
          id: "B",
          text: "B",
          checked: false,
          child: [
            {
              id: "B1",
              text: "B1",
              checked: false,
              child: [
                {
                  id: "B2",
                  text: "B2",
                  checked: false,
                  child: []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "trader-controller",
      text: "Trader Controller",
      checked: false,
      child: []
    }
  ]);

  const updateTree = (tree, checked) => {
    return tree.map((element: IChild) => {
      let newElement = { ...element };
      newElement.checked = checked;
      newElement.child = updateTree(newElement.child, checked);
      return newElement;
    });
  };

  const onChecked = (e, id) => {
    let mappedTree = [...tree].map((element: IChild) => {
      let newElement = { ...element };
      if (element.id === id) {
        newElement.checked = e.target.checked;
        newElement.child = updateTree(newElement.child, e.target.checked);
      }
      return newElement;
    });
    setTree(mappedTree);
  };

  return {
    tree,
    setTree,
    onChecked
  };
};

export default createContainer(useData);


/* const calculateTotalItem = (tree: Nodes): Nodes => {
  return tree.branch.reduce((totalNodes, node) => Array.isArray(node)
    ? totalNodes.branch!.concat(calculateTotalItem(node))
    : totalNodes.branch!.concat(node)
  )
} */


export const calculateTotalItems = (nestedObjects: Nodes[]) => {
  return nestedObjects.reduce(
    (totalItem, nestedObject: Nodes): number => {
      // Add the current object's value
      totalItem++;

      // If we have children, let's add their values too
      if (nestedObject.branch) {
        totalItem += calculateTotalItems(nestedObject.branch);
      }

      // Return the new total
      return totalItem;
    },
    0,
  );
};

// export const claculateT
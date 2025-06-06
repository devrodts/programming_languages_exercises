// tree.test.js
const { Node, treeHeight, levelOrder, swapNodes } = require('./binary_javascript');
function buildSample(){
  const n1 = new Node(1);
  n1.left = new Node(2, new Node(4), new Node(5));
  n1.right = new Node(3);
  return n1;
}
test('treeHeight', ()=> expect(treeHeight(buildSample())).toBe(3));
test('levelOrder', ()=> expect(levelOrder(buildSample())).toEqual([[1],[2,3],[4,5]]));
test('swapNodes', ()=> expect(swapNodes(buildSample(),2)).toEqual([5,2,4,1,3]));

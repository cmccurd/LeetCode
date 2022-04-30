/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    var count = 0; 
    
    var good = root.val;
    
    var recurse = (node, max) => {
        if (node.val >= max) {
            count++;
        }
        max = Math.max(node.val, max);
        node.left !== null ? recurse(node.left, max) : null;
        node.right !== null ? recurse(node.right, max) : null;
    }
    recurse(root, root.val);
    return count;
};
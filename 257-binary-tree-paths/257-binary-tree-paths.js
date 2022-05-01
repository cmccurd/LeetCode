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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    var result = [];
    var permutation = [];
    
    var findLeafs = (node) => {
        permutation.push(node.val);
        
        if (node.left === null && node.right === null) {
            result.push(permutation.join(''));
        } else {
            permutation.push('->');
            node.left !== null ? findLeafs(node.left) : null;
            node.right !== null ? findLeafs(node.right) : null;
            permutation.pop();
        }
        permutation.pop();
    }
    findLeafs(root);
    return result;
};
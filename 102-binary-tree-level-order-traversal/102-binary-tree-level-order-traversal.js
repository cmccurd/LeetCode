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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var result = [];
    var queue = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length) {
        var current = [];
        var l = queue.length;
        for (var i = 0; i < l; i++) {
            var node = queue.shift();
            current.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (current.length) {
            result.push(current);
        }
    }
    return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return 'n';
    }
    var result = root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    var nodes = data.split(',');
    console.log(nodes);
    var buildTree = () => {
        var val = nodes.shift();
        
        if (val === 'n') {
            return null;
        } else {
            let node = new TreeNode(val);
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }
    }
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


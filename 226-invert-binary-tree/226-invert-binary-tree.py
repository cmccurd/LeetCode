# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return root
        if not root.left:
            if not root.right:
                return root
            else:
                root.left = root.right
                root.right = None
                self.invertTree(root.left)
        elif not root.right:
            root.right = root.left
            root.left = None
            self.invertTree(root.right)
        else:
            temp = root.left
            root.left = root.right
            root.right = temp
            self.invertTree(root.left)
            self.invertTree(root.right)
            
        return root
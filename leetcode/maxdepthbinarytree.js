/*
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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

// To find the maximum depth of the tree we can apply a simple recursive approach...
// Where each function call will represent a subtree which has root node called as ‘root’...
// We traverse the binary tree by a recursive function starting from the root node...
var maxDepth = function(root) {
    // Base case...
    // If the subtree is empty i.e. root is NULL, return depth as 0...
    if(root == null)  return 0;
    // if root is not NULL, call the same function recursively for its left child and right child...
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    // When the two child function return its depth...
    // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
    return Math.max(leftDepth, rightDepth) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};

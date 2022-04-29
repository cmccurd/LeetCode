/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  //input image
    //output image
    //use recursion to fill all connected values
        //look at all four value
        //when one is found recurse through it on its 3 other sides
        //also update image.
    start = image[sr][sc];
    if (start === newColor) {
        return image;
    }
    image[sr][sc] = newColor;
    //look left
    if (image[sr][sc - 1] === start) {
        image = floodFill(image, sr, sc - 1, newColor);
    }
    //look right
    if (image[sr][sc + 1] === start) {
        image = floodFill(image, sr, sc + 1, newColor);
    }
    //look up
    if (image[sr - 1] !== undefined && image[sr - 1][sc] === start) {
        image = floodFill(image, sr - 1, sc, newColor);
    }
    //look down
    if (image[sr + 1] !== undefined && image[sr + 1][sc] === start) {
        image = floodFill(image, sr + 1, sc, newColor);
    }
    
    return image;
};
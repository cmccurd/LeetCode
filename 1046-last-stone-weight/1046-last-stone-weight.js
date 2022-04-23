/**
 * @param {number[]} stones
 * @return {number}
 */

    var lastStoneWeight = function(stones) {
    let size = stones.length;
     
    while(size >= 2){
        stones.sort((a,b)=> { return a-b })
        
        x = stones.pop(); 
        y = stones.pop();
        
        if(x == y){
            size -= 2;
        }else{
            size -= 1; 
            stones.unshift(x - y); 
        }
    }
    
    return stones;
};
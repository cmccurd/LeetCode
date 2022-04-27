/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    //I - string with instructions per character
    //O - boolean
    //C - 
    //E - string is empty, string has other characters in it, its not a string?
    
    // if we arrive at 0, 0 after last instruction then return true
    
    //data structure to store matrix
    //variable to set direction
    //iterate through commands
    
    var position = [0, 0];
    var direction = 'north';
    
    for (var i = 0; i < instructions.length; i++) {
        var command = instructions[i];
        if (command === 'G') {
            if (direction === 'north') {
                position[1]++;
            } else if (direction === 'south') {
                position[1]--;
            } else if (direction === 'east') {
                position[0]++;
            } else if (direction === 'west') {
                position[0]--;
            }
        } else if (command === 'L') {
            if (direction === 'north') {
                direction = 'west';
            } else if (direction === 'west') {
                direction = 'south';
            } else if (direction === 'south') {
                direction = 'east';
            } else if (direction === 'east') {
                direction = 'north';
            }
        } else if (command === 'R') {
            if (direction === 'north') {
                direction = 'east';
            } else if (direction === 'east') {
                direction = 'south';
            } else if (direction === 'south') {
                direction = 'west';
            } else if (direction === 'west') {
                direction = 'north';
            }
        }
    }
    if (position[0] === 0 && position[1] === 0) {
        return true;
    } else if (direction === 'north') {
        return false;
    } else {
        return true;
    }
};


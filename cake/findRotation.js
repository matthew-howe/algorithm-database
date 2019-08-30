function findRotationPoint(words) {
    
    // binary search for the index of the item whose 
    // first character has the lowest ascii char code
    // use the first element as a guide                 

    // check if array is unrotated
    if (words[0] < words[words.length - 1]) return 0;
    

    let floor = 0;
    let ceiling = words.length - 1;
    let searchIndex;
    
    while (floor < ceiling) {
            
            searchIndex = Math.floor(floor + (ceiling - floor) / 2 );
            let searchTarget = words[searchIndex]
            
            
            
            if (searchTarget >= words[0]) {
                floor = searchIndex;
            } else {
                ceiling = searchIndex;
            }
            
            if (floor + 1 === ceiling) break;
        
    }
    
    return ceiling;
}


















// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
    'undulate', 'xenoepist', 'asymptote',
    'babka', 'banoffee', 'engender',
    'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}

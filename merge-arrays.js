/**
 * Define a function called merge
 * The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.
 */

function merge(array1, array2) {
  let final = [];
  let length = array1.length + array2.length;
  let x = 0;
  let y = 0;
  for(let i = 0; i < length; i++) {
    if(array1[x] < array2[y]) {
      final.push(array1[x]);
      x++;
    } else if(array1[x] >= array2[y]) {
      final.push(array2[y]);
      y++;
    } else if( x < array1.length && y === array2.length) {
      final.push(array1[x]);
      x++
    } else {
      final.push(array2[y]);
      y++;
    }
  }
  return final;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
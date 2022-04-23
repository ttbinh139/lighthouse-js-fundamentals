/**
 * 
 * @param {*} range should be an array of 2 numbers representing the start and end values for the loop. 
 * @param {*} multiples should be an array of 2 numbers representing the multiples you want to replace with words. 
 * @param {*} words should be an array of 2 strings representing the words that will replace the multiples.
 */
function loopyLighthouse(range, multiples, words) {
  let start = range[0];
  let end = range[1];
  let first = multiples[0];
  let second = multiples[1];
  let firstWord = words[0];
  let secondWord = words[1];
  for(let i = start; i <= end; i++) {
    if(i % first === 0 && i % second === 0) {
      console.log(firstWord + secondWord);
    } else if( i % first === 0) {
      console.log(firstWord);
    } else if( i % second === 0) {
      console.log(secondWord);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);